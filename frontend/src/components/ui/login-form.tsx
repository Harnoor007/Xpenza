import { cn } from "../../lib/utils";
import { Button } from "./button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useState } from "react";
import { Loader } from "lucide-react";

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
    const [isLoading, setIsLoading] = useState(false)
    const handleSubmit = (e: any) => {
        e.preventDefault()
        setIsLoading(true)
        setTimeout(()=>{
            setIsLoading(false)
        }, 3000)
    }
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Enter Details Manually</CardTitle>
          <CardDescription>
            Login with your Apple or Google account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid gap-6">
              <div className="grid gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="mName">Merchant Name</Label>
                  <Input id="mName" type="text" placeholder="Dmart" required />
                </div>
                <div className="grid gap-2">
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a Category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Category</SelectLabel>
                        <SelectItem value="Groceries">Groceries</SelectItem>
                        <SelectItem value="Food">Food</SelectItem>
                        <SelectItem value="Transport">Transport</SelectItem>
                        <SelectItem value="Clothes">Clothes</SelectItem>
                        <SelectItem value="Footwear">Footwear</SelectItem>
                        <SelectItem value="Utilities">Utilities</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="mName">Total Amount</Label>
                  <Input id="mName" type="number" placeholder="1000 ₨" required />
                </div>
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? <Loader className="animate-spin"/> : 'Submit'}
                </Button>
              </div>
             
            </div>
          </form>
        </CardContent>
      </Card>
     
    </div>
  );
}
