import React, { FunctionComponent, useEffect, useMemo, useState } from 'react';
import { Box, Card, CardContent, Grid, TableBody, TableHead, TableRow, Typography } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import LCALogo from './LMBD-Logo-Primary-Horiz-RGB.png';
import Papa from 'papaparse';
import CircularProgress from '@material-ui/core/CircularProgress';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Tooltip from '@material-ui/core/Tooltip';
import Collapse from '@material-ui/core/Collapse';
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import { format } from 'date-fns';

const DONATION_GOAL = 18000;

const donationTiers = [
  {
    label: 'Gold',
    min: 300,
    max: Number.MAX_SAFE_INTEGER,
    details: '$300+',
    color: '#FFD133',
  },
  {
    label: 'Green',
    min: 100,
    max: 300,
    details: '$100 - $299+',
    color: '#046B37',
  },
  {
    label: 'Purple',
    min: 50,
    max: 100,
    details: '$50 - $99',
    color: '#5E266D',
  },
  {
    label: 'Brotherhood',
    min: 0,
    max: 50,
    details: '$1 - $49',
  },
];

interface TimeLeft {
  years: number;
  days: number;
  hours: number;
  min: number;
  sec: number;
}

function calculateCountdown(endDate: Date): TimeLeft | null {
  let diff = (Date.parse(String(new Date(endDate))) - Date.parse(String(new Date()))) / 1000;

  // clear countdown when date is reached
  if (diff <= 0) return null;

  const timeLeft = {
    years: 0,
    days: 0,
    hours: 0,
    min: 0,
    sec: 0,
    millisec: 0,
  };

  // calculate time difference between now and expected date
  if (diff >= 365.25 * 86400) {
    // 365.25 * 24 * 60 * 60
    timeLeft.years = Math.floor(diff / (365.25 * 86400));
    diff -= timeLeft.years * 365.25 * 86400;
  }
  if (diff >= 86400) {
    // 24 * 60 * 60
    timeLeft.days = Math.floor(diff / 86400);
    diff -= timeLeft.days * 86400;
  }
  if (diff >= 3600) {
    // 60 * 60
    timeLeft.hours = Math.floor(diff / 3600);
    diff -= timeLeft.hours * 3600;
  }
  if (diff >= 60) {
    timeLeft.min = Math.floor(diff / 60);
    diff -= timeLeft.min * 60;
  }
  timeLeft.sec = diff;

  return timeLeft;
}

function formatMoney(number: number) {
  return number.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}

function formatPct(decimal: number) {
  return parseFloat(String(decimal * 100.0)).toFixed(2) + '%';
}

interface Donation {
  name: string;
  zeta: string;
  amount: number;
  date: Date;
}

interface Properties {
  donationGoal: number;
  deadline: Date;
  moreInfo: string;
  paypalEmail: string;
  venmoUser: string;
  zelleEmail: string;
  mailCheckAddress: string;
}

function App(): React.ReactNode {
  const [isLoading, setIsLoading] = useState(true);
  const [donationsData, setData] = useState<Donation[]>([]);

  useEffect(() => {
    setIsLoading(true);
    Papa.parse(
      'https://docs.google.com/spreadsheets/d/e/2PACX-1vS1gk8NEzkYM4dW211o-knOAufdli-gEoZLaunhkfDrSPCm0iDa4HEo92br6jP7Q0JRkS0i_HB7mK7P/pub?gid=0&single=true&output=csv',
      {
        download: true,
        header: true,
        complete: ({ data }) => {
          setData(
            data.map((row: any) => ({
              name: row.name,
              zeta: row.zeta,
              amount: parseFloat(row.amount.replace('$', '')),
              date: new Date(row.date),
            }))
          );
          setIsLoading(false);
        },
      }
    );
  }, []);

  const [properties, setProperties] = useState<Properties>({
    donationGoal: 0,
    deadline: new Date(),
    moreInfo: 'more info',
    paypalEmail: '',
    venmoUser: '',
    zelleEmail: '',
    mailCheckAddress: '',
  });

  console.log({ properties });

  useEffect(() => {
    setIsLoading(true);
    Papa.parse(
      'https://docs.google.com/spreadsheets/d/e/2PACX-1vS1gk8NEzkYM4dW211o-knOAufdli-gEoZLaunhkfDrSPCm0iDa4HEo92br6jP7Q0JRkS0i_HB7mK7P/pub?gid=1502649564&single=true&output=csv',
      {
        download: true,
        header: true,
        complete: ({ data }) => {
          setProperties(() => {
            const row = (data as any[])[0];
            return {
              donationGoal: parseFloat(row.donationGoal),
              deadline: new Date(row.deadline),
              moreInfo: row.moreInfo,
              paypalEmail: row.paypalEmail,
              venmoUser: row.venmoUser,
              zelleEmail: row.zelleEmail,
              mailCheckAddress: row.mailCheckAddress,
            };
          });
          setIsLoading(false);
        },
      }
    );
  }, []);

  const range = useMemo(() => {
    let min = Number.MAX_SAFE_INTEGER;
    let max = Number.MIN_SAFE_INTEGER;
    for (const donation of donationsData) {
      min = Math.min(min, donation.amount);
      max = Math.max(max, donation.amount);
    }
    return { min, max };
  }, [donationsData]);

  const totalAmount = donationsData?.reduce((previousValue, currentValue) => previousValue + currentValue.amount, 0);

  const [showLetter, setShowLetter] = useState(false);
  const [showDonateDialog, setShowDonateDialog] = useState(false);

  const progressPct = totalAmount / properties.donationGoal;

  const [showMailingInfo, setShowMailingInfo] = useState(false);

  const [showByTier, setShowByTier] = useState(true);

  return (
    <>
      <div style={{ margin: 20 }}>
        <CssBaseline />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <img src={LCALogo} style={{ width: '100%', maxWidth: 1000 }} alt={'lca logo'} />
          <Typography variant={'h3'}>Theta Upsilon Zeta</Typography>
          <Typography variant={'h2'}>Fall 2023 Ritual at RPI</Typography>
          <Button
            color={'primary'}
            variant={'outlined'}
            onClick={() => setShowLetter(true)}
            style={{ marginBottom: 15 }}
          >
            More Info
          </Button>
          <Button
            color={'primary'}
            variant={'contained'}
            style={{ fontSize: 40, marginBottom: 20 }}
            onClick={() => setShowDonateDialog(true)}
          >
            Donate Now
          </Button>
          <Card style={{ marginBottom: 20, paddingLeft: 30, paddingRight: 30 }}>
            <CardContent>
              <Typography variant={'h4'}>
                <b>Time Left</b>
              </Typography>
              <CountdownText targetDate={properties.deadline} />
            </CardContent>
          </Card>
          {isLoading ? (
            <CircularProgress size={48} />
          ) : (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Typography variant={'h1'}>{formatMoney(totalAmount)}</Typography>
              <Typography>Raised of {formatMoney(properties.donationGoal)}</Typography>
              <Typography>Total Donors: {donationsData?.length}</Typography>
              {/*<div style={{width: '100%'}}>*/}
              <Tooltip title={formatPct(progressPct)}>
                <BorderLinearProgress
                  variant="determinate"
                  value={progressPct * 100.0}
                  style={{ width: '100%', marginTop: 20, marginBottom: 10 }}
                />
              </Tooltip>
              {/*</div>*/}
              {/*    <Typography>{formatPct(progressPct)} to {formatMoney(goalAmount)}</Typography>*/}
            </div>
          )}
        </div>
        <Typography variant={'h4'} gutterBottom>
          Donations
          {/*<Button onClick={() => setShowByTier((prev) => !prev)}>Show By {showByTier ? 'Date' : 'Tier'}</Button>*/}
        </Typography>
        {isLoading ? (
          <LinearProgress style={{ marginTop: 20 }} />
        ) : (
          <>
            {/*{showByTier ? (*/}
            {/*  <DonorListTiers donations={donationsData} range={range} />*/}
            {/*) : (*/}
            <DonationListTime donations={donationsData} />
            {/*)}*/}
          </>
        )}
      </div>
      <Box display={'flex'} flexDirection={'row-reverse'}>
        <a
          href={'https://docs.google.com/spreadsheets/d/1nKf2fATRcnCPiuv9fD98RQ2oVDt_NVCGFeaGYQEJBZA/edit#gid=0'}
          target={'_blank'}
          rel={'noreferrer'}
          style={{ padding: 5, textDecoration: 'none' }}
        >
          .
        </a>
      </Box>
      <LetterDialog showLetter={showLetter} onClose={() => setShowLetter(false)} moreInfo={properties.moreInfo} />
      <Dialog
        open={showDonateDialog}
        onClose={() => setShowDonateDialog(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
      >
        <DialogTitle id="alert-dialog-title">Donate</DialogTitle>
        <DialogContent style={{ padding: 20 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <a
                style={{ textDecoration: 'none' }}
                href={`https://www.paypal.com/donate?business=${encodeURI(
                  properties.paypalEmail
                )}&item_name=Donation&currency_code=USD`}
                target={'_blank'}
                rel={'noreferrer'}
              >
                <Button variant={'contained'} fullWidth>
                  Paypal
                </Button>
              </a>
            </Grid>
            <Grid item xs={12}>
              <a
                style={{ textDecoration: 'none' }}
                href={`https://venmo.com/${properties.venmoUser}`}
                target={'_blank'}
                rel={'noreferrer'}
              >
                <Button variant={'contained'} fullWidth>
                  Venmo
                </Button>
              </a>
            </Grid>
            <Grid item xs={12}>
              <Button variant={'contained'} fullWidth onClick={() => alert(properties.zelleEmail)}>
                Zelle
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button variant={'contained'} fullWidth onClick={() => setShowMailingInfo((prev) => !prev)}>
                Cash / Check
              </Button>
            </Grid>
          </Grid>
          <Collapse in={showMailingInfo}>
            <div style={{ height: 30 }} />
            <Typography variant={'h4'}>Mailing Information</Typography>
            <Typography variant={'caption'}>Please send cash / checks to:</Typography>
            <div style={{ height: 10 }} />
            <Typography style={{ whiteSpace: 'pre-line' }}>{properties.mailCheckAddress}</Typography>
          </Collapse>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default App;

const CountdownText: FunctionComponent<{ targetDate: Date }> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null | undefined>(undefined);

  useEffect(() => {
    updateCountdown();

    const interval = setInterval(() => {
      updateCountdown();
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [targetDate]);

  function updateCountdown() {
    const timeLeft = calculateCountdown(targetDate);

    setTimeLeft(timeLeft);
  }

  return (
    <Grid container spacing={4}>
      <Grid
        item
        xs={3}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography variant={'h3'}>{timeLeft?.days}</Typography>
        <Typography>Days</Typography>
      </Grid>
      <Grid
        item
        xs={3}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography variant={'h3'}>{timeLeft?.hours}</Typography>
        <Typography>Hours</Typography>
      </Grid>
      <Grid
        item
        xs={3}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography variant={'h3'}>{timeLeft?.min}</Typography>
        <Typography>Minutes</Typography>
      </Grid>
      <Grid
        item
        xs={3}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography variant={'h3'}>{timeLeft?.sec}</Typography>
        <Typography>Seconds</Typography>
      </Grid>
    </Grid>
  );
};

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor: theme.palette.grey[theme.palette.type === 'light' ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: '#1a90ff',
  },
}))(LinearProgress);

const LetterDialog: FunctionComponent<{ showLetter: boolean; onClose: () => void; moreInfo: string }> = ({
  showLetter,
  moreInfo,
  onClose,
}) => {
  return (
    <Dialog
      open={showLetter}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      fullWidth
      maxWidth={'lg'}
    >
      <DialogTitle id="alert-dialog-title">More Info</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <Typography style={{ whiteSpace: 'pre-line' }}>{moreInfo}</Typography>
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
};

const DonorListTiers: FunctionComponent<{ donations: Donation[]; range: any }> = ({ donations, range }) => {
  return (
    <Grid container spacing={2}>
      {donationTiers
        .filter((tier) => tier.min >= range.min)
        .map(({ label, min, max, details, color }) => {
          const tierDonations = donations
            ?.filter((donation) => donation.amount < max && donation.amount >= min)
            .sort((a, b) => b.amount - a.amount);
          return (
            <Grid key={label} item xs={12} md={4}>
              <Card style={{ height: '100%' }}>
                <CardContent>
                  <div style={{ display: 'flex', alignItems: 'baseline' }}>
                    <Typography variant={'h4'} style={{ color, flex: 1 }}>
                      {label} ({tierDonations?.length})
                    </Typography>
                    <Typography color={'textSecondary'} style={{ marginBottom: 5 }}>
                      ({details})
                    </Typography>
                  </div>
                  {tierDonations.map(({ name, zeta, amount }) => (
                    <div key={name} style={{ display: 'flex' }}>
                      <Typography style={{ flex: 1 }}>
                        {name} {zeta ? `(${zeta})` : ''}
                      </Typography>
                      <Typography>{formatMoney(amount)}</Typography>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </Grid>
          );
        })}
    </Grid>
  );
};

const DonationListTime: FunctionComponent<{ donations: Donation[] }> = ({ donations }) => {
  return (
    <Card style={{ height: '100%' }}>
      <CardContent>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Zeta</TableCell>
              <TableCell>Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {donations
              .sort((a, b) => b.date.getTime() - a.date.getTime())
              .map(({ date, name, zeta, amount }) => (
                <TableRow key={name}>
                  <TableCell>{format(date, 'P')}</TableCell>
                  <TableCell>{name}</TableCell>
                  <TableCell>{zeta}</TableCell>
                  <TableCell>{formatMoney(amount)}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
