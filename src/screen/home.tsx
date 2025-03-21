import { Link } from "react-router-dom";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../components/ui/card";
import { Navbar } from "../components/customs/narbar";
import { campaignData } from "../mock-data/campaigns";
import { EyeIcon } from "lucide-react";
import {
  CampaignType,
  CampaignEligibilityType,
  CampaignContentType,
} from "../types/types";

const ListCard = ({
  title,
  description,
  image,
  requirements,
  id,
}: CampaignType) => {
  return (
    <Card className="mt-4 gap-2">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full overflow-hidden bg-primary/10">
            <img
              src={image}
              alt={title + " image"}
              className="w-10 h-10 object-contain"
              loading="lazy"
              onError={(e) => {
                (e.target as HTMLImageElement).src =
                  "https://placehold.co/100x100";
              }}
            />
          </div>
          {title}
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2">
          <p className="text-sm text-black-600">Requirements:</p>
          <div className="flex flex-wrap gap-2">
            {requirements.eligibility.map(
              (eligibility: CampaignEligibilityType) => (
                <Badge variant="secondary">
                  {`${eligibility.label}: ${eligibility.value}`}
                </Badge>
              )
            )}
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-sm text-black-600">Task:</p>
            <div className="flex flex-wrap gap-2">
              {requirements.content.map((content: CampaignContentType) => (
                <Badge variant="secondary">
                  {`${content.label}: ${content.value}`}
                </Badge>
              ))}
            </div>
          </div>
          <div className="flex justify-end items-end mt-4">
            <Badge
              variant="default"
              className="bg-green-100/50 text-green-700 text-lg mr-2"
            >
              {requirements.payment.amount}
            </Badge>
            <Link to={`/details/${id}`}>
              <Button variant="default" className="flex items-center gap-2">
                <EyeIcon className="w-4 h-4" />
                View More
              </Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export const HomeScreen = () => {
  return (
    <div>
      <Navbar />
      <div className="px-6">
        {campaignData.map((item: CampaignType) => (
          <ListCard key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};
