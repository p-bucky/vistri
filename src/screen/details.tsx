import { LinkIcon, ShareIcon } from "lucide-react";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Checkbox } from "../components/ui/checkbox";
import { Label } from "../components/ui/label";
import { Navbar } from "../components/customs/narbar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";
import { UsersIcon } from "../assets/icons/users";
import { LocationIcon } from "../assets/icons/location";
import { AccountIcon } from "../assets/icons/account";
import { VideoIcon } from "../assets/icons/video";
import { ImageIcon } from "../assets/icons/image";
import { Link } from "react-router-dom";

type HeaderProps = {
  title: string;
  description: string;
  image: string;
  brand_type: string;
  websitelink: string;
};

const Header = ({
  title,
  description,
  image,
  brand_type,
  websitelink,
}: HeaderProps) => {
  return (
    <div className="border border-gray-200 mt-4 p-4 rounded-lg bg-white">
      <div className="flex flex-col items-center justify-center gap-3">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h1 className="text-xl font-bold">{title}</h1>
            <p className="text-xs text-gray-600">{brand_type}</p>
          </div>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-600">{description}</p>
        </div>
      </div>
      <div className="flex gap-2 mt-4 justify-end">
        {websitelink && (
          <Link to={websitelink} target="_blank">
            <Button variant="secondary" className="text-sm">
              <LinkIcon className="w-4 h-4" />
              Go to Website
            </Button>
          </Link>
        )}
        <Button variant="default" className="text-sm">
          <ShareIcon className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

type RequirementsProps = {
  requirements: {
    payment: {
      amount: string;
    };
    eligibility: Array<{
      type: string;
      value: string;
      label: string;
    }>;
    content: Array<{
      type: string;
      value: string;
      label: string;
    }>;
  };
};

const Requirements: React.FC<RequirementsProps> = ({ requirements }) => {
  return (
    <div className="border border-gray-200 mt-4 p-4 rounded-lg bg-white">
      <div className="flex flex-col gap-3">
        {/* Requirements Section */}
        <div className="flex-1">
          <h2 className="text-lg font-bold mb-3 text-black-600">
            Eligibility Criteria
          </h2>
          <div className="space-y-3">
            {requirements.eligibility.map((item) => (
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                  {item.type === "minimum_followers" && <UsersIcon />}
                  {item.type === "location" && <LocationIcon />}
                  {item.type === "account_type" && <AccountIcon />}
                </div>
                <div>
                  <div className="font-medium text-sm">{item.label}</div>
                  <div className="text-xs text-gray-600">{item.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Task Details Section */}
        <div className="flex-1 border-t pt-4">
          <h2 className="text-lg font-bold mb-3 text-black-600">
            Content To Post
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {requirements.content.map((item) => (
              <div className="bg-gray-50 p-3 rounded-lg">
                <span className="text-xs text-gray-600">{item.label}</span>
                <div className="text-lg font-semibold mt-1">{item.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Payment Section */}
        <div className="flex-1 border-t pt-4">
          <div className="flex flex-col">
            <h2 className="text-lg font-bold text-black-600">
              Campaign Payment
            </h2>
            <div className="flex items-center gap-2 mt-2">
              <Badge
                variant="default"
                className="bg-green-100/50 text-green-700 text-lg"
              >
                {requirements.payment.amount}
              </Badge>
            </div>
          </div>
        </div>
        <div className="bg-primary/10 pt-4 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-3">
            <Checkbox id="terms" className="bg-white" />
            <Label htmlFor="terms" className="text-xs">
              I agree to the terms and conditions of this campaign
            </Label>
          </div>
          <Button className="w-full text-sm">Apply Now</Button>
        </div>
      </div>
    </div>
  );
};

const Schedule = () => {
  return (
    <div className="border border-gray-200 mt-4 p-4 rounded-lg bg-white">
      <h2 className="text-lg font-bold mb-4">Campaign Schedule</h2>
      <div className="flex flex-col gap-3">
        <div className="bg-gray-50 p-3 rounded-lg">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <div>
              <div className="font-medium text-sm">Campaign Starts</div>
              <div className="text-xs text-gray-600">20th March 2025</div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-3 rounded-lg">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div>
              <div className="font-medium text-sm">Submission Deadline</div>
              <div className="text-xs text-gray-600">17th March 2025</div>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 p-3 rounded-lg">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div>
              <div className="font-medium text-sm">Campaign Ends</div>
              <div className="text-xs text-gray-600">20th March 2025</div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 border-t pt-4">
        <h3 className="text-base font-semibold mb-2">
          Content Duration Policy
        </h3>
        <div className="bg-gray-50 p-3 rounded-lg">
          <p className="text-xs text-gray-600 mb-2">
            Keep posts live for the required duration. Removing posts early or
            posting fake content will result in{" "}
            <span className="font-bold text-red-500">account suspension</span>.
          </p>
          <Badge variant="default" className="bg-green-500 text-white text-xs">
            3 Days Minimum
          </Badge>
        </div>
      </div>
    </div>
  );
};

type ContentGuidelinesProps = {
  guidelines: {
    type: string;
    label: string;
    caption: string;
    hashtags: string[];
    mentions: string[];
    link: string;
  }[];
};

const ContentGuidelines = ({ guidelines }: ContentGuidelinesProps) => {
  return (
    <div className="border border-gray-200 mt-4 p-4 rounded-lg bg-white">
      <h2 className="text-lg font-bold mb-1">Content Guidelines</h2>
      <p className="text-xs text-gray-600 mb-1">
        These content you need to post on your social media account.
      </p>

      <Accordion type="single" collapsible className="w-full">
        {guidelines.map((guideline, index) => (
          <AccordionItem value={guideline.type} className="border-b">
            <AccordionTrigger className="py-3">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                  {guideline.type === "reel" && <VideoIcon />}
                  {guideline.type === "story" && <ImageIcon />}
                  {guideline.type === "image" && <ImageIcon />}
                </div>
                <span className="font-medium text-sm">
                  Content {index + 1}: {guideline.label}
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="py-3">
              <div className="space-y-3">
                <div className="bg-gray-50 p-3 rounded-lg">
                  <h4 className="font-medium mb-2 text-sm">
                    Caption Requirements
                  </h4>
                  <p className="text-xs text-gray-600">{guideline.caption}</p>
                </div>

                <div className="bg-gray-50 p-3 rounded-lg">
                  <h4 className="font-medium mb-2 text-sm">
                    Required Hashtags
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {guideline.hashtags.map((hashtag) => (
                      <Badge variant="secondary" className="text-xs">
                        {hashtag}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-50 p-3 rounded-lg">
                  <h4 className="font-medium mb-2 text-sm">
                    Required Mentions
                  </h4>
                  <div className="flex gap-2">
                    {guideline.mentions.map((mention) => (
                      <Badge variant="secondary" className="text-xs">
                        {mention}
                      </Badge>
                    ))}
                  </div>
                </div>

                <Link to={guideline.link} target="_blank">
                  <Button
                    variant="outline"
                    className="w-full flex items-center justify-center gap-2 text-sm"
                  >
                    <LinkIcon className="w-4 h-4" />
                    View Content
                  </Button>
                </Link>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export const DetailsScreen = () => {
  const details = {
    title: "Haldiram's and Company",
    description:
      "Haldiram's launching a new biscuit in the market and we are targeting delhi market.",
    brand_type: "Food & Beverages",
    websitelink: "https://www.haldirams.com/",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4bdp4olgeh9Md0yG4_HSvISyNB259ow-g7Q&s",
    requirements: {
      payment: {
        amount: "$100",
      },
      eligibility: [
        {
          type: "minimum_followers",
          label: "Minimum Followers",
          value: "2000",
        },
        {
          type: "location",
          label: "Location",
          value: "Available across PAN India",
        },
        {
          type: "account_type",
          label: "Account Type",
          value: "Beauty, Fashion, Lifestyle, Food, Travel, etc.",
        },
      ],
      content: [
        {
          type: "reel",
          label: "Reel",
          value: "3",
        },
        {
          type: "post",
          label: "Post",
          value: "2",
        },
      ],
    },
    content_guidelines: [
      {
        type: "reel",
        label: "Reel Video",
        caption:
          "Share your authentic experience with Haldiram's new biscuit launch! Highlight the unique flavors and your favorite moments enjoying this delicious treat.",
        hashtags: [
          "#HaldiramsBiscuit",
          "#HaldiramsNewLaunch",
          "#DeliciousTreats",
        ],
        mentions: ["@haldirams_snacks", "@haldirams.official"],
        link: "https://www.instagram.com/haldirams_snacks/",
      },
      {
        type: "story",
        label: "Instagram Story",
        caption:
          "Excited to try Haldiram's latest biscuit! Join me for a quick taste test and first impressions of this delicious new treat.",
        hashtags: [
          "#HaldiramsBiscuit",
          "#HaldiramsNewLaunch",
          "#DeliciousTreats",
        ],
        mentions: ["@haldirams_snacks", "@haldirams.official"],
        link: "https://www.instagram.com/haldirams_snacks/",
      },
      {
        type: "image",
        label: "Instagram Post",
        caption:
          "Introducing the newest addition to Haldiram's family - their delightful biscuits! Perfect with your evening chai or as a quick snack. The perfect blend of traditional taste and modern flavors.",
        hashtags: [
          "#HaldiramsBiscuit",
          "#HaldiramsNewLaunch",
          "#DeliciousTreats",
          "#FoodieLife",
        ],
        mentions: ["@haldirams_snacks", "@haldirams.official"],
        link: "https://www.instagram.com/haldirams_snacks/",
      },
    ],
  };

  return (
    <div>
      <Navbar />
      <div className="px-4 pb-6">
        <Header
          title={details.title}
          description={details.description}
          image={details.image}
          brand_type={details.brand_type}
          websitelink={details.websitelink}
        />
        <Requirements requirements={details.requirements} />
        {/* <Schedule /> */}
        <ContentGuidelines guidelines={details.content_guidelines} />
      </div>
    </div>
  );
};
