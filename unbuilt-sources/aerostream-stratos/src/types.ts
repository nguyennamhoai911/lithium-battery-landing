export interface AircraftModel {
  id: string;
  name: string;
  tag: string;
  description: string;
  imageUrl: string;
  specs: {
    range: string;
    passengers: string;
    speed: string;
    cabinHeight: string;
  };
}

export interface NavSection {
  id: string;
  label: string;
}

export interface MissionProfile {
  title: string;
  description: string;
  imageUrl: string;
}
