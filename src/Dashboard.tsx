import type {} from '@mui/x-date-pickers/themeAugmentation';
import type {} from '@mui/x-charts/themeAugmentation';
import type {} from '@mui/x-data-grid-pro/themeAugmentation';
import type {} from '@mui/x-tree-view/themeAugmentation';
import { alpha } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import AppNavbar from './components/AppNavbar';
import Header from './components/Header';
import MainGrid from './components/MainGrid';
import SideMenu from './components/SideMenu';
import AppTheme from './theme/AppTheme';
import viteLogo from '/vite.svg'
import {
  chartsCustomizations,
  // dataGridCustomizations,
  datePickersCustomizations,
  treeViewCustomizations,
} from './theme/customizations';
//import viteLogo from "*.svg";

const xThemeComponents = {
  ...chartsCustomizations,
  // ...dataGridCustomizations,
  ...datePickersCustomizations,
  ...treeViewCustomizations,
};

export default function Dashboard(props: { disableCustomTheme?: boolean }) {
  return (
    <AppTheme {...props} themeComponents={xThemeComponents}>
      <CssBaseline enableColorScheme />
      <Box sx={{ display: 'flex' }}>
        <SideMenu />
        <AppNavbar />
          <a href="https://vite.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>

        {/* Main content */}
        <Box
          component="main"
          sx={(theme) => ({
            flexGrow: 1,
            backgroundColor: theme.vars
              ? `rgba(${theme.vars.palette.background.defaultChannel} / 1)`
              : alpha(theme.palette.background.default, 1),
            overflow: 'auto',
          })}
        >
          <Stack
            spacing={2}
            sx={{
              alignItems: 'center',
              mx: 3,
              pb: 5,
              mt: { xs: 8, md: 0 },
            }}
          >
            <Header />
            <MainGrid />
          </Stack>
        </Box>
      </Box>
    </AppTheme>
  );
}
