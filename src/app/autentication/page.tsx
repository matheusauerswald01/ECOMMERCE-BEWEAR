import { AppWindowIcon, CodeIcon } from "lucide-react";
import SingInForm from "./components/sing-in-form";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SingUpForm from "./components/sing-up-form";

const AutenticationPage = async () => {
  return (
    <div className="flex w-full max-w-sm flex-col gap-6">
      <Tabs defaultValue="sing-in">
        <TabsList>
          <TabsTrigger value="sing-in">Entrar</TabsTrigger>
          <TabsTrigger value="sing-up">Criar Conta</TabsTrigger>
        </TabsList>
        <TabsContent value="sing-in">
          <SingInForm />
        </TabsContent>
        <TabsContent value="sing-up">
          <SingUpForm />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AutenticationPage;
