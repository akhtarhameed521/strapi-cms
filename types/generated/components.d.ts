import type { Schema, Struct } from '@strapi/strapi';

export interface FacilitiesCard extends Struct.ComponentSchema {
  collectionName: 'components_facilities_cards';
  info: {
    description: 'Card for the facilities section';
    displayName: 'Facility Card';
    icon: 'grid';
  };
  attributes: {
    cardDescription: Schema.Attribute.Text;
    cardImage: Schema.Attribute.Media<'images'>;
    cardTitle: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface MarketMarketing extends Struct.ComponentSchema {
  collectionName: 'components_market_marketings';
  info: {
    displayName: 'Marketing';
  };
  attributes: {
    compaignDate: Schema.Attribute.Text;
    title: Schema.Attribute.Text & Schema.Attribute.Required;
  };
}

export interface SeoSeo extends Struct.ComponentSchema {
  collectionName: 'components_seo_seos';
  info: {
    displayName: 'SEO';
    icon: 'attachment';
  };
  attributes: {
    metaDescription: Schema.Attribute.String;
    metaTags: Schema.Attribute.String;
    metaTitle: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'facilities.card': FacilitiesCard;
      'market.marketing': MarketMarketing;
      'seo.seo': SeoSeo;
    }
  }
}
