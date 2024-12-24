"use client";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";

const FormSchema = z.object({
  price: z.enum(["asc", "desc"], {
    required_error: "Please select a price order.",
  }),
});

export function SelectForm() {
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const params = new URLSearchParams(searchParams);
  const { replace } = useRouter();

  const defaultOrder = (searchParams.get("order") as "asc" | "desc") || "asc";
  
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      price: defaultOrder,
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    params.delete("page");
    if (data.price) {
      params.set("order", data.price.toString());
    } else {
      params.delete("order");
    }
    replace(`${pathName}?${params.toString()}`);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="inline-block w-fit mt-4"
      >
        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>PRICE</FormLabel>
              <Select
                onValueChange={(value) => {
                  field.onChange(value); // Update field value
                  form.handleSubmit(onSubmit)(); // Submit the form
                }}
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Price" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="asc">From Low To High</SelectItem>
                  <SelectItem value="desc">From High To Low</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}
