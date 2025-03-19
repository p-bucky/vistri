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

const ListCard = () => {
  return (
    <Card className="mt-4 gap-2">
      <CardHeader>
        <CardTitle>
          <Link
            to="https://haldiram.com"
            target="_blank"
            className="flex items-center gap-2"
          >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4bdp4olgeh9Md0yG4_HSvISyNB259ow-g7Q&s"
              alt="Haldiram"
              className="w-10 h-10"
            />
            Haldiram's and Company
          </Link>
        </CardTitle>
        <CardDescription>
          Haldiram's launching a new biscuit in the market and we are targeting
          delhi market.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-2">
          <p className="text-sm text-gray-500">Requirements:</p>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">Instagram Followers: 2K+</Badge>
            <Badge variant="secondary">Location: PAN India</Badge>
            <Badge variant="secondary">
              Account Type: Food Blog, Health Blog, etc.
            </Badge>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-sm text-gray-500">Task:</p>
            <Badge variant="secondary">3 Reel and 2 Post</Badge>
          </div>
          <div className="flex justify-between items-end">
            <p className="text-sm text-primary">
              Payment:
              <span className="text-lg font-semibold ml-1">$10</span>
            </p>
            <Link to="/details">
              <Button>View Details</Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export const HomeScreen = () => {
  return (
    <div className="px-6">
      {[
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
      ].map((item) => (
        <ListCard key={item} />
      ))}
    </div>
  );
};
