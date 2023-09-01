import * as React from "react";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Divider, Link } from "@mui/material";
import Privacy from "../privacy";

import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function Footer({ showDisclaimer = false }) {
  const [open, setOpen] = useState(false);

  const openPrivacyDialog = () => {
    setOpen(true);
  };

  const openSocialLink = (url) => {
    window.open(url);
  };

  return (
    <AppBar position="static">
      <Privacy open={open} onClose={() => setOpen(false)} />
      <Toolbar sx={{ backgroundColor: "#050709" }}>
        <Container
          maxWidth="xl"
          sx={{
            display: "flex",
            flexDirection: { xs: "column", lg: "column" },
            paddingLeft: { xs: 0 },
            paddingRight: { xs: 0 },
            justifyContent: "space-between",
            alignItems: "center",
            paddingBottom: "65px",
            paddingTop: "35px",
          }}
        >
          <Stack
            direction="row"
            sx={{
              // width: "100%",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: { xs: "center" },
              alignItems: { xs: "center" },
            }}
          >
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                fontSize: "16px",
                color: "#9CA3AF",
                cursor: "default",
                marginRight: { xs: "15px", sm: "20px", md: "20px" },
              }}
            >
              ©2022 Clone AI
            </Typography>
            <Link
              sx={{
                fontSize: "16px",
                color: "white",
                "&:hover": { color: "red" },
                textDecoration: "underline",
                cursor: "pointer",
                marginRight: { xs: "15px", sm: "20px", md: "20px" },
              }}
              onClick={openPrivacyDialog}
            >
              Term and Conditions
            </Link>
            <Link
              sx={{
                fontSize: "16px",
                color: "white",
                "&:hover": { color: "red" },
                cursor: "pointer",
                textDecoration: "underline",
              }}
              onClick={openPrivacyDialog}
            >
              Privacy Policy
            </Link>
          </Stack>

          {showDisclaimer ? (
            <Stack
              direction="row"
              alignItems="center"
              spacing={4}
              sx={{
                display: "flex",
                justifyContent: { xs: "center", sm: "flex-end" },
                // width: "100%",
                marginTop: "25px",
              }}
            >
              <FacebookIcon
                sx={{ cursor: "pointer" }}
                fontSize="large"
                color="#fff"
                onClick={() =>
                  openSocialLink(
                    "https://www.facebook.com/profile.php?id=100095144835098&mibextid=LQQJ4d"
                  )
                }
              />
              <TwitterIcon
                fontSize="large"
                sx={{ color: "#fff", cursor: "pointer" }}
                onClick={() =>
                  openSocialLink("https://twitter.com/officialcloneai")
                }
              />
              <InstagramIcon
                fontSize="large"
                sx={{ color: "#fff", cursor: "pointer" }}
                onClick={() =>
                  openSocialLink(
                    "https://www.instagram.com/invites/contact/?i=394pb19mzgb7&utm_content=s4bqjdk"
                  )
                }
              />
              <YouTubeIcon
                fontSize="large"
                sx={{ color: "#fff", cursor: "pointer" }}
                onClick={() =>
                  openSocialLink("https://youtube.com/@CloneAiinc")
                }
              />
            </Stack>
          ) : null}

          {showDisclaimer ? (
            <Divider
              sx={{ width: "100%", marginTop: "30px", marginBottom: "30px" }}
            />
          ) : null}

          {showDisclaimer ? (
            <Stack>
              <div>
                <Typography
                  variant="body1"
                  marginBottom={2}
                  sx={{
                    color: "#a8a4a0",
                    fontSize: "14px",
                    fontWeight: "400",
                    lineHeight: "24px",
                    textAlign: { xs: "center", sm: "left" },
                  }}
                >
                  These results are based on simulated or hypothetical
                  performance results that have certain inherent limitations.
                  Unlike the results shown in an actual performance record,
                  these results do not represent actual trading. Also, because
                  these trades have not actually been executed, these results
                  may have under-or over-compensated for the impact, if any, of
                  certain market factors, such as lack of liquidity. Simulated
                  or hypothetical trading programs in general are also subject
                  to the fact that they are designed with the benefit of
                  hindsight. No representation is being made that any account
                  will or is likely to achieve profits or losses similar to
                  these being shown. In addition, hypothetical trading does not
                  involve financial risk, and no hypothetical trading record can
                  completely account for the impact of financial risk in actual
                  trading. For example, the ability to withstand losses or to
                  adhere to a particular trading program in spite of trading
                  losses are material points which can also adversely affect
                  actual trading results. There are numerous other factors
                  related to the markets in general or to the implementation of
                  any specific trading program, which cannot be fully accounted
                  for in the preparation of hypothetical performance results and
                  all of which can adversely affect actual trading results.
                </Typography>
              </div>

              <div>
                <Typography
                  variant="body1"
                  marginBottom={2}
                  sx={{
                    color: "#a8a4a0",
                    fontSize: "14px",
                    fontWeight: "400",
                    lineHeight: "24px",
                    textAlign: { xs: "center", sm: "left" },
                  }}
                >
                  Trading is risky. You can lose money. Past results are not
                  necessarily indicative of future results. Stocks whether long
                  or short equities and options trading is not right for
                  everyone.
                </Typography>
              </div>

              <div>
                <Typography
                  variant="body1"
                  fontWeight="bold"
                  sx={{ textAlign: { xs: "center", sm: "left" } }}
                >
                  Material assumptions and methods used when calculating
                  results.
                </Typography>
                <Typography
                  variant="body1"
                  marginBottom={2}
                  sx={{
                    color: "#a8a4a0",
                    fontSize: "14px",
                    fontWeight: "400",
                    lineHeight: "24px",
                    textAlign: { xs: "center", sm: "left" },
                  }}
                >
                  The following are material assumptions used when calculating
                  any hypothetical monthly results that appear on our web site.
                  Profits are reinvested. We assume profits (when there are
                  profits) are reinvested in the trading strategy. Starting
                  investment size. For any trading strategy on our site,
                  hypothetical results are based on the assumption that you
                  invested the starting amount shown on the strategy's
                  performance chart. In some cases, nominal dollar amounts on
                  the equity chart have been re-scaled downward to make current
                  go-forward trading sizes more manageable. In these cases, it
                  may not have been possible to trade the strategy historically
                  at the equity levels shown on the chart, and a higher minimum
                  capital was required in the past. All fees are included. When
                  calculating cumulative returns, we try to estimate and include
                  all the fees a typical trader incurs when AutoTrading using
                  AutoTrade technology. This includes the subscription cost of
                  the strategy, plus any per-trade AutoTrade fees, plus
                  estimated broker commissions if any.{" "}
                </Typography>
              </div>

              <div>
                <Typography
                  variant="body1"
                  fontWeight="bold"
                  sx={{ textAlign: { xs: "center", sm: "left" } }}
                >
                  "Max Drawdown" Calculation Method.
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: "#a8a4a0",
                    fontSize: "14px",
                    fontWeight: "400",
                    lineHeight: "24px",
                    textAlign: { xs: "center", sm: "left" },
                  }}
                >
                  We calculate the Max Drawdown statistic as follows. Our
                  computer software looks at the equity chart of the system in
                  question and finds the largest percentage amount that the
                  equity chart ever declines from a local "peak" to a subsequent
                  point in time (thus this is formally called "Maximum Peak to
                  Valley Drawdown.") While this is useful information when
                  evaluating trading systems, you should keep in mind that past
                  performance does not guarantee future results. Therefore,
                  future drawdowns may be larger than the historical maximum
                  drawdowns you see here.
                </Typography>
              </div>
            </Stack>
          ) : null}
        </Container>
      </Toolbar>
    </AppBar>
  );
}
