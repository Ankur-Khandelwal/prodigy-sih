// material
import { alpha, styled } from '@mui/material/styles';
import { Card, Typography } from '@mui/material';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
// utils
import { fShortenNumber } from '../../../utils/formatNumber';
//
import Iconify from '../../../components/Iconify';

// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  textAlign: 'center',
  padding: theme.spacing(5, 0),
  color: theme.palette.secondary.dark,
  backgroundColor: theme.palette.secondary.lighter
}));

const IconWrapperStyle = styled('div')(({ theme }) => ({
  margin: 'auto',
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  width: theme.spacing(8),
  height: theme.spacing(8),
  justifyContent: 'center',
  marginBottom: theme.spacing(3),
  color: theme.palette.secondary.dark,
  backgroundImage: `linear-gradient(135deg, ${alpha(theme.palette.secondary.dark, 0)} 0%, ${alpha(
    theme.palette.secondary.dark,
    0.24
  )} 100%)`
}));

// ----------------------------------------------------------------------

const TOTAL = 234;

export default function AppBugReports() {
  return (
    <RootStyle>
      <IconWrapperStyle>
        {/* <Iconify icon="ant-design:bug-filled" width={24} height={24} /> */}
        <AdminPanelSettingsIcon/>
      </IconWrapperStyle>
      <Typography variant="h3">5</Typography>
      <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
        Total Badges
      </Typography>
    </RootStyle>
  );
}
