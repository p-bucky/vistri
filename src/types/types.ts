
type CampaignEligibilityType = {
  type: string;
  label: string;
  value: string;
};

type CampaignContentType = {
  type: string;
  label: string;
  value: string;
};

type CampaignType = {
  id: string;
  title: string;
  description: string;
  brand_type: string;
  websitelink: string;
  image: string;
  requirements: {
    payment: {
      amount: string;
    };
    eligibility: Array<CampaignEligibilityType>;
    content: Array<CampaignContentType>;
  };
  content_guidelines: Array<{
    type: string;
    label: string;
    caption: string;
    hashtags: string[];
    mentions: string[];
    link: string;
  }>;
};

export type { CampaignType, CampaignEligibilityType, CampaignContentType };
