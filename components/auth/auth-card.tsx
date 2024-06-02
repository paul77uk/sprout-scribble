import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { BackButton } from "./back-button";
import Socials from "./socials";

type CardwrapperProps = {
  children: React.ReactNode;
  cardTitle: string;
  backButtonHref: string;
  backButtonLabel: string;
  showSocials?: boolean;
};

export const AuthCard = ({
  children,
  cardTitle,
  backButtonHref,
  backButtonLabel,
  showSocials,
}: CardwrapperProps) => (
  <Card>
    <CardHeader>
      <CardTitle>{cardTitle}</CardTitle>
    </CardHeader>
    <CardContent>{children}</CardContent>
    {showSocials && (
      <CardFooter>
        <Socials />
      </CardFooter>
    )}
    <CardFooter>
      <BackButton href={backButtonHref} label={backButtonLabel} />
    </CardFooter>
  </Card>
);
