import { IProElementPosition, IRgbColor } from './shared.model';

export interface IPro4Song {
  properties: IPro4Properties;
  slides: IPro4Slide[];
}

export interface IPro4Properties {
  CCLIArtistCredits: string;
  CCLICopyrightInfo: string | number;
  CCLIDisplay: boolean;
  CCLILicenseNumber: string | number;
  CCLIPublisher: string;
  CCLISongTitle: string;
  album: string;
  artist: string;
  author: string;
  backgroundColor: string;
  category: string;
  creatorCode: number;
  docType?: number;
  drawingBackgroundColor?: number;
  height: number;
  lastDateUsed: Date;
  notes: string;
  resourcesDirectory: string;
  usedCount: number;
  versionNumber: number;
  width: number;
}

export interface IPro4Slide {
  label: string;
  id: string;
  backgroundColor: string;
  highlightColor: string;
  textElements: IPro4SlideTextElement[];
}

export interface IPro4SlideTextElement {
  position: IProElementPosition;
  rawRtfContent: string;
  textContent: string;
  font: string;
  size: number;
  color: IRgbColor;
}
