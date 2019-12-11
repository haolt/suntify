import React from 'react';
import SSection from '../layouts/SSection';
import Playlists from '../Playlists/component';

const Features = () => (
  <>
    <SSection title="Focus" subtitle="Music to help you concentrate.">
      <Playlists />
    </SSection>
    <SSection title="Sleep" subtitle="Music to help you concentrate.">
      <Playlists />
    </SSection>
    <SSection title="Mood" subtitle="Music to help you concentrate.">
      <Playlists />
    </SSection>
    <SSection title="Popular new releases" subtitle="Music to help you concentrate.">
      <Playlists />
    </SSection>
    <SSection title="Girls of K-Pop" subtitle="Music to help you concentrate.">
      <Playlists />
    </SSection>
  </>
)

export default Features;