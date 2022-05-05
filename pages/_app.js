import React, { useState, useEffect } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useRouter } from 'next/router'

import SnackbarController from '../components/snackbar'

import stores from '../stores/index.js'

import {
  CONFIGURE,
} from '../stores/constants'

import '../styles/globals.css'

import lightTheme from '../theme/light';
import darkTheme from '../theme/dark';

function MyApp({ Component, pageProps }) {
  const [ themeConfig, setThemeConfig ] = useState(lightTheme);
  const router = useRouter()

  useEffect(() => {
    if(!router.isReady) return

    if(router.query?.style) {
      changeTheme(router.query?.style === 'dark')
    }
  }, [router])

  const changeTheme = (dark) => {
    setThemeConfig(dark ? darkTheme : lightTheme)
    localStorage.setItem("yearn.finance-dark-mode", dark ? "dark" : "light");
  }

  useEffect(function() {
    const localStorageDarkMode = window.localStorage.getItem(
      "yearn.finance-dark-mode"
    );
    changeTheme(localStorageDarkMode ? localStorageDarkMode === "dark" : false);
  }, []);

  useEffect(function() {
    stores.dispatcher.dispatch({ type: CONFIGURE })
  },[]);

  return (
    <ThemeProvider theme={ themeConfig }>
      <CssBaseline />
      <Component {...pageProps} changeTheme={ changeTheme } />
      <SnackbarController />
    </ThemeProvider>
  )
}

export default MyApp
