// import DiscordIcon from "@/components/icons/discord-icon";
import TwitchIcon from "@/components/icons/twitch";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export const CommunitySection = () => {
  return (
    <section id="community" className="py-12 ">
      <hr className="border-secondary" />
      <div className="container py-20 sm:py-20">
        <div className="lg:w-[60%] mx-auto">
          <Card className="bg-background border-none shadow-none text-center flex flex-col items-center justify-center">
            <CardHeader>
              <CardTitle className="text-4xl md:text-5xl font-bold flex flex-col items-center">
                <TwitchIcon />
                <div>
                  Prêt à rejoindre la
                  <span className="text-transparent pl-2 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
                    communauté ?
                  </span>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="lg:w-[80%] text-xl text-muted-foreground">
              Rejoignez notre dynamique communauté Twitch ! Connectez-vous,
              partagez et grandissez avec des passionnés partageant les mêmes
              idées.🚀
            </CardContent>

            <CardFooter>
              <Button asChild>
                <a href="https://www.twitch.tv/" target="_blank">
                  Rejoindre Twitch
                </a>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
      <hr className="border-secondary" />
    </section>
  );
};
