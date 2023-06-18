export interface IXmlPro6DocRoot {
  RVPresentationDocument: IXmlPro6Doc;
}

export interface IXmlPro6Doc {
  '@CCLIArtistCredits': string;
  '@CCLIAuthor': string;
  '@CCLICopyrightYear': string | number;
  '@CCLIDisplay': boolean;
  '@CCLIPublisher': string;
  '@CCLISongNumber': string | number;
  '@CCLISongTitle': string;
  '@backgroundColor': string;
  '@buildNumber': number;
  '@category': string;
  '@chordChartPath': string;
  '@docType': number;
  '@drawingBackgroundColor': boolean;
  '@height': number;
  '@lastDateUsed': Date;
  '@notes': string;
  '@os': number;
  '@resourcesDirectory': string;
  '@selectedArrangementID': string;
  '@usedCount': number;
  '@versionNumber': number;
  '@width': number;

  RVTimeline: IXmlPro6Timeline;
  array: (IXmlPro6DocArrayElementGroups | IXmlPro6DocArrayElementArrangements)[]; //multiple "<array>" elements could be various kinds of data
}

export interface IXmlPro6ElementWithVarName {
  '@rvXMLIvarName': string;
}

export interface IXmlPro6Timeline extends IXmlPro6ElementWithVarName {
  '@rvXMLIvarName': 'timeline';
  '@timeOffset': number;
  '@duration': number;
  '@selectedMediaTrackIndex': number;
  '@loop': boolean;
  array: IXmlPro6TimelineArray[];
}

export interface IXmlPro6TimelineArray extends IXmlPro6ElementWithVarName {
  '@rvXMLIvarName': 'timeCues' | 'mediaTracks';
}

//-----------------------------------------
//Slide Groups & Slides
export interface IXmlPro6DocArrayElementGroups extends IXmlPro6ElementWithVarName {
  '@rvXMLIvarName': 'groups';
  RVSlideGrouping: IXmlPro6SlideGroup[];
}

export interface IXmlPro6SlideGroup {
  array: IXmlPro6SlideGroupingArray;
  '@name': string;
  '@color': string;
  '@uuid': string;
}

export interface IXmlPro6SlideGroupingArray extends IXmlPro6ElementWithVarName {
  '@rvXMLIvarName': 'slides';
  RVDisplaySlide: IXmlPro6DisplaySlide[];
}

export interface IXmlPro6DisplaySlide {
  array: (IXmlPro6DisplaySlideCue | IXmlPro6DisplaySlideDisplayElement)[];
  '@backgroundColor': string;
  '@highlightColor': string;
  '@drawingBackgroundColor': boolean;
  '@enabled': boolean;
  '@hotKey': string;
  '@label': string;
  '@notes': string;
  '@UUID': string;
  '@chordChartPath': string;
}

export interface IXmlPro6DisplaySlideCue extends IXmlPro6ElementWithVarName {
  '@rvXMLIvarName': 'cues';
}

//-----------------------------------------
//Slide Display Element - Text & text properties
export interface IXmlPro6DisplaySlideDisplayElement extends IXmlPro6ElementWithVarName {
  '@rvXMLIvarName': 'displayElements';
  RVTextElement?: IXmlPro6TextElement[];
}

export interface IXmlPro6TextElement {
  RVRect3D: IXmlPro6TextRect3D;
  shadow: IXmlPro6TextShadow;
  dictionary: IXmlPro6TextStroke;
  NSString: IXmlPro6TextString[];
  '@displayName': string;
  '@UUID': string;
  '@typeID': number;
  '@displayDelay': number;
  '@locked': boolean;
  '@persistent': number;
  '@fromTemplate': boolean;
  '@opacity': number;
  '@source': string;
  '@bezelRadius': number;
  '@rotation': number;
  '@drawingFill': boolean;
  '@drawingShadow': boolean;
  '@drawingStroke': boolean;
  '@fillColor': string;
  '@adjustsHeightToFit': boolean;
  '@verticalAlignment': number;
  '@revealType': number;
}

export interface IXmlPro6TextRect3D extends IXmlPro6ElementWithVarName {
  '@rvXMLIvarName': 'position';
  '#text': string;
}

export interface IXmlPro6TextShadow extends IXmlPro6ElementWithVarName {
  '@rvXMLIvarName': 'shadow';
  '#text': string;
}

export interface IXmlPro6TextString extends IXmlPro6ElementWithVarName {
  '@rvXMLIvarName': 'PlainText' | 'RTFData' | 'WinFlowData' | 'WinFontData';
  '#text': string;
}

export interface IXmlPro6TextStroke extends IXmlPro6ElementWithVarName {
  '@rvXMLIvarName': 'stroke';
  NSColor: {
    '#text': string;
    '@rvXMLDictionaryKey': 'RVShapeElementStrokeColorKey';
  };
  NSNumber: {
    '#text': number;
    '@rvXMLDictionaryKey': 'RVShapeElementStrokeWidthKey';
    '@hint': 'double';
  };
}

//-----------------------------------------
//Arrangements
export interface IXmlPro6DocArrayElementArrangements extends IXmlPro6ElementWithVarName {
  '@rvXMLIvarName': 'arrangements';
  RVSongArrangement?: IXmlPro6Arrangement[];
}

export interface IXmlPro6Arrangement {
  '@name': string;
  '@uuid': string;
  '@color': string;
  array: {
    '@rvXMLIvarName': 'groupIDs';
    NSString: string[];
  };
}
