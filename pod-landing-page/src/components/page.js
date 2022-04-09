import React, { useCallback, useState } from "react";
import * as Styled from "./styled/page";
import IconSpotify from "../assets/desktop/spotify.svg";
import IconApplePodcast from "../assets/desktop/apple-podcast.svg";
import IconGooglePodcasts from "../assets/desktop/google-podcasts.svg";
import IconPocketCasts from "../assets/desktop/pocket-casts.svg";

const emailRegex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/;

const validateEmail = (emailAddress) => emailRegex.test(emailAddress);

const Page = () => {
  const [emailAddress, setEmailAddress] = useState("");
  const [error, setError] = useState("");

  console.log(error);
  return (
    <Styled.Container>
      <Styled.LogoContainer>
        <Styled.Logo />
      </Styled.LogoContainer>
      <Styled.HeroContainer>
        <Styled.Heading>
          Publish your podcasts <span>everywhere.</span>
        </Styled.Heading>
        <Styled.Paragraph>
          Upload your audio to Pod with a single click. We’ll then distribute
          your podcast to Spotify, Apple Podcasts, Google Podcasts, Pocket Casts
          and more!
        </Styled.Paragraph>

        <Styled.PodCastsContainer>
          <div>
            <Styled.PodCastContainer src={IconSpotify} />
          </div>
          <div>
            <Styled.PodCastContainer src={IconApplePodcast} />
          </div>
          <div>
            <Styled.PodCastContainer src={IconGooglePodcasts} />
          </div>
          <div>
            <Styled.PodCastContainer src={IconPocketCasts} />
          </div>
        </Styled.PodCastsContainer>
      </Styled.HeroContainer>

      <Styled.FormContainer>
        <Styled.InputGroup>
          <Styled.Input
            type="email"
            placeholder="Email address"
            onChange={({ target }) => {
              setEmailAddress(target.value);
              setError();
            }}
          ></Styled.Input>
          {error && <Styled.ErrorMessage>{error}</Styled.ErrorMessage>}
        </Styled.InputGroup>
        <Styled.Button
          disabled={!emailAddress}
          onClick={() => {
            const isValid = validateEmail(emailAddress);
            if (!isValid) setError("Oops! Please check your email");
          }}
        >
          Request access
        </Styled.Button>
      </Styled.FormContainer>
    </Styled.Container>
  );
};

export default Page;
