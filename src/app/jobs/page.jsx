"use client";

import Image from "next/image";
import { useForm } from "react-hook-form";
import ManageIcon from "../../../public/images/manage.svg";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import MultipleSelector from "@/components/ui/multiselect";
import { Badge } from "@/components/ui/badge";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useEffect, useState } from "react";
import { add, formatDistanceToNow, isBefore } from "date-fns";

const tags = [
  {
    id: 1,
    text: "NEW!",
    color: "#4D9493",
  },
  {
    id: 2,
    text: "FEATURED",
    color: "#000",
  },
];

const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
    disable: true,
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
  {
    value: "angular",
    label: "Angular",
  },
  {
    value: "vue",
    label: "Vue.js",
  },
  {
    value: "react",
    label: "React",
  },
  {
    value: "ember",
    label: "Ember.js",
  },
  {
    value: "gatsby",
    label: "Gatsby",
  },
  {
    value: "eleventy",
    label: "Eleventy",
    disable: true,
  },
  {
    value: "solid",
    label: "SolidJS",
  },
  {
    value: "preact",
    label: "Preact",
  },
  {
    value: "qwik",
    label: "Qwik",
  },
  {
    value: "alpine",
    label: "Alpine.js",
  },
  {
    value: "lit",
    label: "Lit",
  },
];

const defaultValues = {
  jobTitle: "",
  department: "",
  jobType: "",
  location: "",
  tags: [],
};

const Jobs = () => {
  const [open, setOpen] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [values, setValues] = useState(defaultValues);

  const form = useForm({
    defaultValues: defaultValues,
    values: values,
  });

  const toggleDialog = () => {
    setOpen((val) => !val);
  };

  const onSubmit = async (data) => {
    try {
      if (data.id) {
        const res = await fetch(`http://localhost:3000/jobs/${data.id}`, {
          method: "PUT",
          body: JSON.stringify({ ...data, created_at: new Date() }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const json = await res.json();
        setJobs((val) => {
          const index = val.findIndex((x) => x.id === data.id);
          return [...val.slice(0, index), json, ...val.slice(index + 1)];
        });
      } else {
        const res = await fetch("http://localhost:3000/jobs", {
          method: "POST",
          body: JSON.stringify({ ...data, created_at: new Date() }),
          headers: {
            "Content-Type": "application/json",
          },
        });
        const json = await res.json();
        setJobs((val) => [...val, json]);
      }

      toggleDialog();
    } catch (error) {}
  };

  const deleteJob = async (id) => {
    try {
      await fetch(`http://localhost:3000/jobs/${id}`, {
        method: "DELETE",
      });
      setJobs((val) => {
        const index = val.findIndex((x) => x.id === id);
        return [...val.slice(0, index), ...val.slice(index + 1)];
      });
    } catch (error) {}
  };

  const loadJobs = async () => {
    try {
      const res = await fetch("http://localhost:3000/jobs");
      const json = await res.json();
      setJobs(json);
    } catch (error) {}
  };

  useEffect(() => {
    loadJobs();
  }, []);

  return (
    <>
      <header className="bg-slate-400 h-40"></header>
      <main className="container mx-auto my-10">
        <Dialog open={open} onOpenChange={toggleDialog}>
          <Button
            variant="outline"
            onClick={() => {
              form.reset(defaultValues);
              toggleDialog();
            }}
          >
            Add Job
          </Button>
          <DialogContent className="sm:max-w-[425px]">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <DialogHeader>
                  <DialogTitle>Add Job</DialogTitle>
                  <DialogDescription>
                    Make changes to add job here. Click save when you're done.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <FormField
                    control={form.control}
                    name="jobTitle"
                    rules={{
                      required: {
                        value: true,
                        message: "Job Title is required",
                      },
                    }}
                    render={({ field }) => (
                      <FormItem className="grid grid-cols-4 items-center gap-x-4">
                        <FormLabel className="text-right">Job Title</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="shadcn"
                            className="col-span-3"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="col-span-3 col-start-2" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="department"
                    rules={{
                      required: {
                        value: true,
                        message: "Department is required",
                      },
                    }}
                    render={({ field }) => (
                      <FormItem className="grid grid-cols-4 items-center gap-x-4">
                        <FormLabel className="text-right">Department</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="shadcn"
                            className="col-span-3"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage className="col-span-3 col-start-2" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="jobType"
                    rules={{
                      required: {
                        value: true,
                        message: "Job Type is required",
                      },
                    }}
                    render={({ field }) => (
                      <FormItem className="grid grid-cols-4 items-center gap-x-4">
                        <FormLabel className="text-right">Job Type</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="col-span-3">
                              <SelectValue placeholder="Select a Job Type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Select Job Type</SelectLabel>
                              <SelectItem value="Full Type">
                                Full Type
                              </SelectItem>
                              <SelectItem value="Part Time">
                                Part Time
                              </SelectItem>
                              <SelectItem value="Freelancer">
                                Freelancer
                              </SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                        <FormMessage className="col-span-3 col-start-2" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="location"
                    rules={{
                      required: {
                        value: true,
                        message: "Location is required",
                      },
                    }}
                    render={({ field }) => (
                      <FormItem className="grid grid-cols-4 items-center gap-x-4">
                        <FormLabel className="text-right">Location</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger className="col-span-3">
                              <SelectValue placeholder="Select a Job Type" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectGroup>
                              <SelectLabel>Location</SelectLabel>
                              <SelectItem value="Remote">Remote</SelectItem>
                              <SelectItem value="In Office">
                                In Office
                              </SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                        <FormMessage className="col-span-3 col-start-2" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="tags"
                    rules={{
                      required: {
                        value: true,
                        message: "tags is required",
                      },
                    }}
                    render={({ field }) => (
                      <FormItem className="grid grid-cols-4 items-center gap-x-4">
                        <FormLabel className="text-right">Department</FormLabel>
                        <FormControl>
                          <div className="col-span-3">
                            <MultipleSelector
                              id="tags"
                              commandProps={{
                                label: "Select frameworks",
                              }}
                              value={field.value}
                              onChange={field.onChange}
                              defaultOptions={frameworks}
                              placeholder="Select Tags"
                              hideClearAllButton
                              hidePlaceholderWhenSelected
                              emptyIndicator={
                                <p className="text-center text-sm">
                                  No results found
                                </p>
                              }
                            />
                          </div>
                        </FormControl>
                        <FormMessage className="col-span-3 col-start-2" />
                      </FormItem>
                    )}
                  />
                </div>
                <DialogFooter>
                  <Button type="submit" disabled={!form.formState.isValid}>
                    Save changes
                  </Button>
                </DialogFooter>
              </form>
            </Form>
          </DialogContent>
        </Dialog>
        <div>
          {jobs.map((job) => (
            <div
              key={job.id}
              className="border-l-8 border-green-400 flex gap-4 items-center p-10 my-10 shadow-md"
            >
              <ManageIcon />
              <div className="flex-1">
                <div className="flex gap-4">
                  <p>{job.department}</p>
                  <div className="flex gap-4">
                    {isBefore(
                      new Date(),
                      add(new Date(job.created_at), { minutes: 5 })
                    ) && <Badge>New</Badge>}
                  </div>
                </div>
                <p>{job.jobTitle}</p>
                <div className="flex gap-4">
                  <p>
                    {formatDistanceToNow(new Date(job.created_at), {
                      addSuffix: true,
                    })}
                  </p>
                  <p>{job.jobType}</p>
                  <p>{job.location}</p>
                </div>
              </div>
              <div className="flex-1 flex gap-4 justify-end">
                {job.tags.map((x) => (
                  <Badge key={x.value}>{x.label}</Badge>
                ))}
              </div>
              <button
                onClick={() => {
                  setValues(job);
                  toggleDialog();
                }}
              >
                Edit
              </button>
              <button onClick={() => deleteJob(job.id)}>Delete</button>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default Jobs;
