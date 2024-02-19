import React from 'react';
import {
  ImigAudi,
  ImigInfinity,
  ImigJaguar,
  ImigLincoln,
  ImigPegot,
  ImigVolvo,
  InfoContrag,
  WrapContagent,
  WrapHome,
} from './Home.styled';

export default function Home() {
  return (
    <WrapHome>
      <WrapContagent>
        <InfoContrag>
          <h4 className="info-title">Luxury Car Rentals</h4>
          <p className="info-text">123 Example Street, Kiev, Ukraine</p>
          <p className="info-text">789 Example Boulevard, Odessa, Ukraine</p>
          <p className="info-text">321 Example Road, Odessa, Ukraine</p>
        </InfoContrag>
        <ImigAudi />
      </WrapContagent>
      <WrapContagent>
        <ImigInfinity />
        <InfoContrag>
          <h4 className="info-title">Premium Auto Rentals</h4>
          <p className="info-text">456 Example Avenue, Lviv, Ukraine</p>
          <p className="info-text">789 Example Square, Dnipro, Ukraine</p>
        </InfoContrag>
      </WrapContagent>
      <WrapContagent>
        <InfoContrag>
          <h4 className="info-title">Adventure Car Rentals</h4>
          <p className="info-text">321 Example Road, Kharkiv, Ukraine</p>
          <p className="info-text">987 Example Street, Kyiv, Ukraine</p>
        </InfoContrag>
        <ImigJaguar />
      </WrapContagent>
      <WrapContagent>
        <ImigLincoln />
        <InfoContrag>
          <h4 className="info-title">City Car Rentals</h4>
          <p className="info-text">654 Example Avenue, Lviv, Ukraine</p>
          <p className="info-text">234 Example Place, Vinnytsia, Ukraine</p>
        </InfoContrag>
      </WrapContagent>
      <WrapContagent>
        <InfoContrag>
          <h4 className="info-title">Elite Car Rentals</h4>
          <p className="info-text">123 Example Boulevard, Kharkiv, Ukraine</p>
          <p className="info-text">456 Example Street, Lviv, Ukraine</p>
        </InfoContrag>
        <ImigPegot />
      </WrapContagent>
      <WrapContagent>
        <ImigVolvo />
        <InfoContrag>
          <h4 className="info-title">Economy Car Rentals</h4>
          <p className="info-text">456 Example Lane, Zaporizhzhia, Ukraine</p>
          <p className="info-text">567 Example Street, Lviv, Ukraine</p>
        </InfoContrag>
      </WrapContagent>
    </WrapHome>
  );
}
