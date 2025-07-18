import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { Mail, Phone } from "lucide-react"
import { Textarea } from "./ui/textarea"


const formSchema = z.object({
  fName: z.string().min(2, "Enter your first name"),
  lName: z.string().min(2, "Enter your last name"),
  email: z.email("Invalid email address"),
  phone: z.string().min(10, "Contact number must be at least 10 digits long"),
  location: z.enum(["banglore", "delhi", "mumbai"], {
    message: "Please select a location"
  }),
  type: z.enum(["villa", "home"], {
    message: "Please select a type"
  }),
  bathrooms: z.enum(["1", "2", "3"]),
  bedrooms: z.enum(["2", "3", "4"]),
  budget: z.enum(["$50,000","$80,000","$20,000"]),
  contactPhone: z.string().optional(),
  contactEmail: z.email("Please enter a valid email"),
    message: z.string().min(10, "Message must be at least 10 characters"),
    msg: z.string().optional(),
      terms: z.boolean()
 
})
const SubmitForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fName: "",
      lName: "",
      email: "",
      phone: "",
      location: "banglore",
      type: "home",
      bathrooms: "1",
      bedrooms: "2",
      budget: "$20,000",
      contactPhone: "",
      contactEmail: "",
      msg:"",
      terms: false
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }
  return (
    <div className="rounded-2xl shadow-md  border-[2px] border-[#262626] p-4">

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 ">
            <FormField
              control={form.control}
              name="fName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold text-md font-display">First Name</FormLabel>
                  <FormControl>
                    <Input className="focus-visible:ring-0 border-2 border-[#262626]" placeholder="Enter First Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold text-md font-display">Last Name</FormLabel>
                  <FormControl>
                    <Input className="focus-visible:ring-0 border-2 border-[#262626]" placeholder="Enter Last Name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold text-md font-display">Email</FormLabel>
                  <FormControl>
                    <Input className="focus-visible:ring-0 border-2 border-[#262626]" placeholder="Enter your Email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold text-md font-display">Phone</FormLabel>
                  <FormControl>
                    <Input className="focus-visible:ring-0 border-2 border-[#262626]" placeholder="Enter Phone Number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold text-md font-display">Preferred Location</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl className="">
                      <SelectTrigger className="w-full focus-visible:ring-0">
                        <SelectValue placeholder="Select Location" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-black text-muted-foreground">
                      <SelectItem value="banglore">Banglore</SelectItem>
                      <SelectItem value="delhi">Delhi</SelectItem>
                      <SelectItem value="mumbai">Mumbai</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold text-md font-display">Preferred type</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl className="focus-visible:ring-0">
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select Location" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-black text-muted-foreground">
                      <SelectItem value="villa">Villa</SelectItem>
                      <SelectItem value="home">Home</SelectItem>

                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="bedrooms"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold text-md font-display">No. of BathRooms</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl className="focus-visible:ring-0">
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select Location" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-black text-muted-foreground">
                      <SelectItem value="1">1</SelectItem>
                      <SelectItem value="2">2</SelectItem>
                      <SelectItem value="3">3</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="location"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold text-md font-display">No. of BedRooms</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl className="focus-visible:ring-0">
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select Location" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-black text-muted-foreground">
                      <SelectItem value="2">2</SelectItem>
                      <SelectItem value="3">3</SelectItem>
                      <SelectItem value="4">4</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="budget"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold text-md font-display">Preferred Location</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl className="">
                      <SelectTrigger className="w-full focus-visible:ring-0">
                        <SelectValue placeholder="Select Location" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-black text-muted-foreground">
                      <SelectItem value="$50,000">$50,000</SelectItem>
                      <SelectItem value="$80,000">$80,000</SelectItem>
                      <SelectItem value="$20,000">$20,000</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex gap-4">
              <FormField
                control={form.control}
                name="contactPhone"
                render={({ field }) => (
                  <FormItem className="flex-1/2">
                    <FormLabel className="font-semibold text-md font-display">Prefered Contact</FormLabel>
                    <div className="relative">
                      <Phone className="absolute inset-y-2 left-2 text-[#262626]"/>
                    <FormControl>
                      <Input className="focus-visible:ring-0 border-2 pl-10 border-[#262626]" placeholder="Enter your number" {...field} />
                    </FormControl>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="contactEmail"
                render={({ field }) => (
                  <FormItem className="flex-1/2">
                    <FormLabel className="font-semibold text-md font-display">Prefered Email</FormLabel>
                    <div className="relative">
                     <Mail className="absolute inset-y-2 left-2 text-[#262626]"/>
                    <FormControl>
                     
                      <Input className="focus-visible:ring-0 border-2 pl-10 border-[#262626]" placeholder="Enter your email" {...field} />
                    </FormControl>
                    </div>
                    
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="w-full">
                    <FormField
          control={form.control}
          name="msg"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Enter your message here"
                  className="resize-none focus-visible:ring-0 border-2 border-[#262626]"
                  {...field}
                />
              </FormControl>
           
              <FormMessage />
            </FormItem>
          )}
        />
          </div>
          <div className="w-full">


            <Button type="submit" className="w-full">Submit</Button>
          </div>
          
        </form>
      </Form>

    </div>
  )
}

export default SubmitForm
