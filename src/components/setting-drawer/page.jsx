import React from 'react';
import "./page.css";
import { IoClose } from "react-icons/io5";
import { MdRefresh, MdOutlineFullscreen, MdOutlineLanguage } from "react-icons/md";
import { styled } from '@mui/material/styles';
import { Box, Grid, FormGroup, Switch } from '@mui/material';

export default function Page(props) {
    const AntSwitch = styled(Switch)(({ theme }) => ({
        width: 28,
        height: 16,
        padding: 0,
        display: 'flex',
        '&:active': {
            '& .MuiSwitch-thumb': {
                width: 15,
            },
            '& .MuiSwitch-switchBase.Mui-checked': {
                transform: 'translateX(9px)',
            },
        },
        '& .MuiSwitch-switchBase': {
            padding: 2,
            '&.Mui-checked': {
                transform: 'translateX(12px)',
                color: '#fff',
                '& + .MuiSwitch-track': {
                    opacity: 1,
                    backgroundColor: theme.palette.mode === 'dark' ? '#177ddc' : '#1890ff',
                },
            },
        },
        '& .MuiSwitch-thumb': {
            boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
            width: 12,
            height: 12,
            borderRadius: 6,
            transition: theme.transitions.create(['width'], { duration: 200 }),
        },
        '& .MuiSwitch-track': {
            borderRadius: 8,
            opacity: 1,
            backgroundColor: theme.palette.mode === 'dark' ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.25)',
        },
    }));


    const toggleFullScreen = () => {
        if (!document.fullscreenElement) {
            // Enter fullscreen
            const elem = document.documentElement;
            if (elem.requestFullscreen) {
                elem.requestFullscreen();
            } else if (elem.mozRequestFullScreen) {
                elem.mozRequestFullScreen();
            } else if (elem.webkitRequestFullscreen) {
                elem.webkitRequestFullscreen();
            } else if (elem.msRequestFullscreen) {
                elem.msRequestFullscreen();
            }
        } else {
            // Exit fullscreen
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
        }
    };

    return (
        <Box className="setting">
            <Grid container>
                <Grid item xs={10} md={2.8} className="item" sx={{
                    background: `url(/assets/images/blue.png), url(/assets/images/red.png), white`,
                    left: props.close ? "-100%" : "0px"
                }}>
                    <Box className="top">
                        <p>
                            <IoClose onClick={() => props.setClose(true)} />
                            <MdRefresh />
                            <MdOutlineFullscreen  onClick={toggleFullScreen}/>
                        </p>
                        <p>Settings</p>
                    </Box>

                    <Box className="mode" sx={{position:"relative"}}>
                        <FormGroup className="form">
                            <Box className="row">
                                <AntSwitch defaultChecked inputProps={{ 'aria-label': 'ant design' }} />
                                <svg
  width={24}
  height={24}
  viewBox="0 0 24 24"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <path
    opacity="0.32"
    d="M16.9462 11.0863C16.9759 11.0875 17.0055 11.0886 17.035 11.0898C20.1966 11.2176 22.5 13.3358 22.5 16.5C22.5 19.6642 20.1966 21.7824 17.035 21.9102C15.7057 21.9639 14.0498 22 12 22C9.9502 22 8.2943 21.9639 6.965 21.9102C3.80337 21.7824 1.5 19.6642 1.5 16.5C1.5 14.0317 2.90165 12.1999 5.019 11.4529C5.2406 8.2951 7.3872 6.02435 10.6413 6.00125C10.7585 6.00045 10.878 6 11 6C11.122 6 11.2415 6.00045 11.3587 6.00125C14.4855 6.02345 16.5897 8.1208 16.9462 11.0863Z"
    fill="#1c251E"
  />
  <path
    d="M19.2407 2.28853C19.5263 2.12002 19.5419 1.62921 19.2169 1.57222C18.1306 1.38179 16.9755 1.56344 15.9464 2.17059C14.4123 3.07575 13.5394 4.70186 13.501 6.38837C15.4283 7.12677 16.6785 8.86242 16.9459 11.0863L17.0347 11.0898C17.7391 11.1183 18.401 11.2456 19.0042 11.4612C19.6324 11.3806 20.2555 11.1732 20.8383 10.8294C21.8673 10.2222 22.5988 9.2907 22.9806 8.23415C23.0948 7.918 22.6711 7.6864 22.3855 7.8549C20.8813 8.74235 18.958 8.2157 18.0896 6.6786C17.2212 5.1415 17.7366 3.17599 19.2407 2.28853Z"
    fill="#666"
  />
</svg>

                            </Box>
                            <p>Mode</p>
                        </FormGroup>
                    </Box>

                    <Box className="lang">
                        <FormGroup className="form">
                            <Box className="row">
                                <AntSwitch defaultChecked inputProps={{ 'aria-label': 'ant design' }} />
                                <MdOutlineLanguage />
                            </Box>
                            <p>Language</p>
                        </FormGroup>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}
