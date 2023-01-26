import * as React from 'react';
import {
  DocumentCard,
  DocumentCardActivity,
  DocumentCardDetails,
  DocumentCardPreview,
  DocumentCardTitle,
  IDocumentCardPreviewProps,
  DocumentCardType,
  IDocumentCardActivityPerson,
} from '@fluentui/react/lib/DocumentCard';
import { Stack, IStackTokens } from '@fluentui/react/lib/Stack';
import { getTheme } from '@fluentui/react/lib/Styling';
import { TestImages } from '@fluentui/example-data';

const stackTokens: IStackTokens = { childrenGap: 20 };
const theme = getTheme();
const { palette, fonts } = theme;

const people: IDocumentCardActivityPerson[] = [
  { name: 'Annie Lindqvist', profileImageSrc: TestImages.personaFemale },
  { name: 'Roko Kolar', profileImageSrc: '', initials: 'RK' },
  { name: 'Aaron Reid', profileImageSrc: TestImages.personaMale },
  { name: 'Christian Bergqvist', profileImageSrc: '', initials: 'CB' },
];

const previewPropsUsingIcon: IDocumentCardPreviewProps = {
  previewImages: [
    {
      previewIconProps: {
        iconName: 'OpenFile',
        styles: { root: { fontSize: fonts.superLarge.fontSize, color: palette.white } },
      },
      width: 144,
    },
  ],
  styles: { previewIcon: { backgroundColor: palette.themePrimary } },
};

const previewProps: IDocumentCardPreviewProps = {
  getOverflowDocumentCountText: (overflowCount: number) => `+${overflowCount} more`,
  previewImages: [
    {
      previewImageSrc: "https://res-1.cdn.office.net/files/fabric-cdn-prod_20221209.001/office-ui-fabric-react-assets/document-preview.png",
      width: 144,
    }
  ],
};

const previewOutlookUsingIcon: IDocumentCardPreviewProps = {
  previewImages: [
    {
      previewIconProps: {
        iconName: 'OutlookLogo',
        styles: {
          root: {
            fontSize: fonts.superLarge.fontSize,
            color: '#0078d7',
            backgroundColor: palette.neutralLighterAlt,
          },
        },
      },
      width: 144,
    },
  ],
  styles: {
    previewIcon: { backgroundColor: palette.neutralLighterAlt },
  },
};

export const EventsNew: React.FunctionComponent = () => {
  return (
    <Stack tokens={stackTokens}>
      <DocumentCard
        type={DocumentCardType.compact}
        onClickHref="http://bing.com"
      >
        <DocumentCardPreview previewImages={[previewProps.previewImages[0]]} />
        <DocumentCardDetails>
          <DocumentCardTitle title="Revenue stream proposal fiscal year 2016 version02.pptx" shouldTruncate />
          <DocumentCardActivity activity="Created a few minutes ago" people={[people[1]]} />
        </DocumentCardDetails>
      </DocumentCard>
    </Stack>
  );
};



