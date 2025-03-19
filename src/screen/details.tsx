import { LinkIcon } from "lucide-react";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Checkbox } from "../components/ui/checkbox";
import { Label } from "../components/ui/label";

const Header = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <div className="flex items-center gap-2">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4bdp4olgeh9Md0yG4_HSvISyNB259ow-g7Q&s"
          alt="Haldiram's and Company"
          className="w-10 h-10"
        />
        <h1>Haldiram's and Company</h1>
      </div>
      <p className="text-sm text-center">
        Haldiram's launching a new biscuit in the market and we are targeting
        delhi market.
      </p>
    </div>
  );
};

const Requirements = () => {
  return (
    <div className="border border-gray-200 mt-4 p-3 rounded-md">
      <h2 className="text-lg font-semibold">Requirements</h2>
      <p className="text-xs text-red-400 mb-2">
        If you don't meet these requirements, please do not apply as your
        application will be rejected. We carefully review each account for this
        task.
      </p>
      <div className="flex flex-wrap gap-2 mt-2">
        <Badge variant="secondary">Instagram Followers: 2K+</Badge>
        <Badge variant="secondary">Location: PAN India</Badge>
      </div>
    </div>
  );
};

const Task = () => {
  return (
    <div className="border border-gray-200 mt-4 mt-4 p-3 rounded-md">
      <h2 className="text-lg font-semibold">Task</h2>
      <div className="flex flex-wrap gap-2 mt-2">
        <Badge variant="secondary">3 Reel and 2 Post</Badge>
      </div>
    </div>
  );
};

const Schedule = () => {
  return (
    <div className="border border-gray-200 mt-4 mt-4 p-3 rounded-md">
      <h2 className="text-lg font-semibold">Schedule</h2>
      <div className="flex flex-col gap-4 mt-2">
        <div className="flex items-center gap-2">
          <Badge variant="secondary" className="flex-1 py-1">
            <div className="h-2 w-2 rounded-full bg-green-500"></div>
            <span className="font-medium">Starts:</span> 20th March 2025
          </Badge>
        </div>

        <div className="flex items-center gap-2">
          <Badge variant="secondary" className="flex-1 py-1">
            <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
            <span className="font-medium">Submit by:</span> 17th March 2025
          </Badge>
        </div>

        <div className="flex items-center gap-2">
          <Badge variant="secondary" className="flex-1 py-1">
            <div className="h-2 w-2 rounded-full bg-red-500"></div>
            <span className="font-medium">Ends:</span> 20th March 2025
          </Badge>
        </div>
      </div>

      <div className="mt-2">
        <h3 className="text-sm font-medium">Task Duration</h3>
        <p className="text-xs text-gray-500 mb-2">
          Keep posts live for the required duration. Removing posts early or
          posting fake content will result in{" "}
          <span className="font-bold">account suspension</span>.
        </p>
        <Badge variant="default" className="bg-green-500 text-white">
          3 Days
        </Badge>
      </div>
    </div>
  );
};

const Payment = () => {
  return (
    <div className="border border-gray-200 mt-4 mt-4 p-3 rounded-md">
      <h2 className="text-lg font-semibold">Payment</h2>
      <p className="text-xs text-gray-500 mb-2">
        Payment will be done on end date of the task.
      </p>
      <div className="flex flex-wrap gap-2 mt-2">
        <Badge variant="secondary" className="bg-green-500 text-white">
          Payment: ₹ 1000
        </Badge>
      </div>
    </div>
  );
};

const ContentGuidelines = () => {
  return (
    <div className="border border-gray-200 mt-4 mt-4 p-3 rounded-md">
      <h2 className="text-lg font-semibold">Content Guidelines</h2>
      <p className="text-xs text-gray-500 mb-4">
        Please follow the below guidelines for the content.
      </p>

      <div className="space-y-6">
        <div className="border-b pb-6">
          <h3 className="text-lg font-semibold mb-4">Content 1: Reel Video</h3>
          <ul className="space-y-4">
            <li className="flex flex-col gap-2">
              <h4 className="font-medium text-sm">Caption</h4>
              <p className="text-sm text-gray-600">
                Share your authentic experience with Haldiram's new biscuit
                launch! Highlight the unique flavors and your favorite moments
                enjoying this delicious treat.
              </p>
            </li>
            <li className="flex flex-col gap-2">
              <h4 className="font-medium text-sm">Hashtags</h4>
              <div className="flex flex-wrap gap-2">
                <span className="text-primary text-sm">#HaldiramsBiscuit</span>
                <span className="text-primary text-sm">
                  #HaldiramsNewLaunch
                </span>
                <span className="text-primary text-sm">#DeliciousTreats</span>
                <span className="text-primary text-sm">#IndianSnacks</span>
                <span className="text-primary text-sm">#FoodieLife</span>
              </div>
            </li>
            <li className="flex flex-col gap-2">
              <h4 className="font-medium text-sm">Mentions</h4>
              <div className="flex gap-3">
                <span className="text-primary text-sm">@haldirams_snacks</span>
                <span className="text-primary text-sm">
                  @haldirams.official
                </span>
              </div>
            </li>
          </ul>
          <div className="flex items-center gap-2 mt-4">
            <a
              href="#"
              className="text-blue-500 hover:underline text-sm flex items-center gap-2"
            >
              Open Reel Video
              <LinkIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Content 2: Image Post</h3>
          <ul className="space-y-4">
            <li className="flex flex-col gap-2">
              <h4 className="font-medium text-sm">Caption</h4>
              <p className="text-sm text-gray-600">
                Share your authentic experience with Haldiram's new biscuit
                launch! Highlight the unique flavors and your favorite moments
                enjoying this delicious treat.
              </p>
            </li>
            <li className="flex flex-col gap-2">
              <h4 className="font-medium text-sm">Hashtags</h4>
              <div className="flex flex-wrap gap-2">
                <span className="text-primary text-sm">#HaldiramsBiscuit</span>
                <span className="text-primary text-sm">
                  #HaldiramsNewLaunch
                </span>
                <span className="text-primary text-sm">#DeliciousTreats</span>
                <span className="text-primary text-sm">#IndianSnacks</span>
                <span className="text-primary text-sm">#FoodieLife</span>
              </div>
            </li>
            <li className="flex flex-col gap-2">
              <h4 className="font-medium text-sm">Mentions</h4>
              <div className="flex gap-3">
                <span className="text-primary text-sm">@haldirams_snacks</span>
                <span className="text-primary text-sm">
                  @haldirams.official
                </span>
              </div>
            </li>
          </ul>
          <div className="flex items-center gap-2 mt-4">
            <a
              href="#"
              className="text-blue-500 hover:underline text-sm flex items-center gap-2"
            >
              Open Image Post
              <LinkIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const Action = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-50 p-4">
      <div className="flex items-center space-x-2 my-1">
        <Checkbox id="terms" />
        <Label htmlFor="terms">Accept terms and conditions</Label>
      </div>
      <Button className="mt-4 w-full">Apply Now</Button>
    </div>
  );
};

export const DetailsScreen = () => {
  return (
    <div className="px-6 pb-32">
      <Header />
      <Requirements />
      <Task />
      <Schedule />
      <Payment />
      <ContentGuidelines />
      <Action />
    </div>
  );
};
