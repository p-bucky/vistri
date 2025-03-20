import { LinkIcon } from "lucide-react";
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
import { ClockIcon } from "../assets/icons/clock";
import { UsersIcon } from "../assets/icons/users";
import { LocationIcon } from "../assets/icons/location";
import { AccountIcon } from "../assets/icons/account";
import { VideoIcon } from "../assets/icons/video";
import { ImageIcon } from "../assets/icons/image";

const Header = () => {
  return (
    <div className="border border-gray-200 mt-4 p-4 rounded-lg bg-white">
      <div className="flex flex-col items-center justify-center gap-3">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full overflow-hidden">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4bdp4olgeh9Md0yG4_HSvISyNB259ow-g7Q&s"
              alt="Haldiram's and Company"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h1 className="text-xl font-bold">Haldiram's and Company</h1>
            <p className="text-xs text-gray-600">Food & Beverages</p>
          </div>
        </div>
        <div className="text-center">
          <p className="text-sm text-gray-600">
            Haldiram's launching a new biscuit in the market and we are
            targeting delhi market.
          </p>
        </div>
      </div>
    </div>
  );
};

const Requirements = () => {
  return (
    <div className="border border-gray-200 mt-4 p-4 rounded-lg bg-white">
      <div className="flex flex-col gap-6">
        {/* Payment Section */}
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xl font-bold text-green-600">₹1000</span>
          </div>

          <div className="flex items-center gap-2 text-xs text-gray-600">
            <ClockIcon />
            Payment released within 7 days after completion
          </div>
        </div>

        {/* Requirements Section */}
        <div className="flex-1 border-t pt-4">
          <h2 className="text-lg font-bold mb-3">Eligibility Criteria</h2>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                <UsersIcon />
              </div>
              <div>
                <div className="font-medium text-sm">Minimum Followers</div>
                <div className="text-xs text-gray-600">
                  2,000+ followers required
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                <LocationIcon />
              </div>
              <div>
                <div className="font-medium text-sm">Location</div>
                <div className="text-xs text-gray-600">
                  Available across PAN India
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                <AccountIcon />
              </div>
              <div>
                <div className="font-medium text-sm">Account Type</div>
                <div className="text-xs text-gray-600">
                  Beauty, Fashion, Lifestyle, Food, Travel, etc.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Task Details Section */}
        <div className="flex-1 border-t pt-4">
          <h2 className="text-lg font-bold mb-3">Content To Post</h2>
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-gray-50 p-3 rounded-lg">
              <span className="text-xs text-gray-600">Reels</span>
              <div className="text-lg font-semibold mt-1">3</div>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg">
              <span className="text-xs text-gray-600">Posts</span>
              <div className="text-lg font-semibold mt-1">2</div>
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

const ContentGuidelines = () => {
  return (
    <div className="border border-gray-200 mt-4 p-4 rounded-lg bg-white">
      <h2 className="text-lg font-bold mb-3">Content Guidelines</h2>
      <p className="text-xs text-gray-600 mb-4">
        Please follow these guidelines carefully to ensure your content meets
        our requirements.
      </p>

      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1" className="border-b">
          <AccordionTrigger className="py-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                <VideoIcon />
              </div>
              <span className="font-medium text-sm">Content 1: Reel Video</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="py-3">
            <div className="space-y-3">
              <div className="bg-gray-50 p-3 rounded-lg">
                <h4 className="font-medium mb-2 text-sm">
                  Caption Requirements
                </h4>
                <p className="text-xs text-gray-600">
                  Share your authentic experience with Haldiram's new biscuit
                  launch! Highlight the unique flavors and your favorite moments
                  enjoying this delicious treat.
                </p>
              </div>

              <div className="bg-gray-50 p-3 rounded-lg">
                <h4 className="font-medium mb-2 text-sm">Required Hashtags</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-xs">
                    #HaldiramsBiscuit
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    #HaldiramsNewLaunch
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    #DeliciousTreats
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    #IndianSnacks
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    #FoodieLife
                  </Badge>
                </div>
              </div>

              <div className="bg-gray-50 p-3 rounded-lg">
                <h4 className="font-medium mb-2 text-sm">Required Mentions</h4>
                <div className="flex gap-2">
                  <Badge variant="secondary" className="text-xs">
                    @haldirams_snacks
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    @haldirams.official
                  </Badge>
                </div>
              </div>

              <Button
                variant="outline"
                className="w-full flex items-center justify-center gap-2 text-sm"
              >
                <LinkIcon className="w-4 h-4" />
                View Content
              </Button>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger className="py-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                <ImageIcon />
              </div>
              <span className="font-medium text-sm">Content 2: Image Post</span>
            </div>
          </AccordionTrigger>
          <AccordionContent className="py-3">
            <div className="space-y-3">
              <div className="bg-gray-50 p-3 rounded-lg">
                <h4 className="font-medium mb-2 text-sm">
                  Caption Requirements
                </h4>
                <p className="text-xs text-gray-600">
                  Share your authentic experience with Haldiram's new biscuit
                  launch! Highlight the unique flavors and your favorite moments
                  enjoying this delicious treat.
                </p>
              </div>

              <div className="bg-gray-50 p-3 rounded-lg">
                <h4 className="font-medium mb-2 text-sm">Required Hashtags</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="text-xs">
                    #HaldiramsBiscuit
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    #HaldiramsNewLaunch
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    #DeliciousTreats
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    #IndianSnacks
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    #FoodieLife
                  </Badge>
                </div>
              </div>

              <div className="bg-gray-50 p-3 rounded-lg">
                <h4 className="font-medium mb-2 text-sm">Required Mentions</h4>
                <div className="flex gap-2">
                  <Badge variant="secondary" className="text-xs">
                    @haldirams_snacks
                  </Badge>
                  <Badge variant="secondary" className="text-xs">
                    @haldirams.official
                  </Badge>
                </div>
              </div>

              <Button
                variant="outline"
                className="w-full flex items-center justify-center gap-2 text-sm"
              >
                <LinkIcon className="w-4 h-4" />
                View Content
              </Button>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export const DetailsScreen = () => {
  return (
    <div>
      <Navbar />
      <div className="px-4 pb-6">
        <Header />
        <Requirements />
        <Schedule />
        <ContentGuidelines />
      </div>
    </div>
  );
};
