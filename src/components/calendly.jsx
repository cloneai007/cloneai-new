import React from 'react'
import { PopupModal } from "react-calendly";

const pageSettings = {
  backgroundColor: 'ffffff',
  hideEventTypeDetails: false,
  hideLandingPageDetails: true,
  primaryColor: '00a2ff',
  textColor: '4d5055',
  "overflow-y": "hidden",
  overflowY: "hidden",
  height: "650px",
}

const utm = {
  utmCampaign: '2023',
  utmContent: 'Consultation',
  utmMedium: 'Ad',
  utmSource: 'Website',
  utmTerm: ''
}

const Calendly = React.memo(({ onCalenderOpen, onCalenderClose }) => {
  return (
    <PopupModal
      styles={{ "height": "800px" }}
      url={global.config.calendlyKey}
      pageSettings={pageSettings}
      utm={utm}
      onModalClose={onCalenderClose}
      open={onCalenderOpen}
      rootElement={document.getElementById("root")}
    />
  )
})

export default Calendly;
