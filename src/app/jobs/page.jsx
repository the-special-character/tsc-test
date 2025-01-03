import Image from "next/image";
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

const skills = ["Frontend", "Senior", "HTML", "CSS", "Javascript"];

const Jobs = () => {
  return (
    <>
      <header className="bg-slate-400 h-40"></header>
      <main className="container mx-auto my-10">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Add Job</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add Job</DialogTitle>
              <DialogDescription>
                Make changes to add job here. Click save when you're done.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="job-title" className="text-right">
                  Job Title
                </Label>
                <Input id="job-title" defaultValue="" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="department" className="text-right">
                  Department
                </Label>
                <Input id="department" defaultValue="" className="col-span-3" />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="job-type" className="text-right">
                  Job Type
                </Label>
                <Select id="job-type">
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select a Job Type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Job Type</SelectLabel>
                      <SelectItem value="apple">Full Type</SelectItem>
                      <SelectItem value="banana">Part Time</SelectItem>
                      <SelectItem value="blueberry">Freelancer</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="job-location" className="text-right">
                  Location
                </Label>
                <Select id="job-location">
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select a Location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Location</SelectLabel>
                      <SelectItem value="apple">Remote</SelectItem>
                      <SelectItem value="banana">In Office</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="tags" className="text-right">
                  Tags
                </Label>
                <div className="col-span-3">
                  <MultipleSelector
                    id="tags"
                    commandProps={{
                      label: "Select frameworks",
                    }}
                    value={frameworks.slice(0, 2)}
                    defaultOptions={frameworks}
                    placeholder="Select Tags"
                    hideClearAllButton
                    hidePlaceholderWhenSelected
                    emptyIndicator={
                      <p className="text-center text-sm">No results found</p>
                    }
                  />
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        <div className="border-l-8 border-green-400 flex gap-4 items-center p-10 my-10 shadow-md">
          <ManageIcon />
          <div className="flex-1">
            <div className="flex gap-4">
              <p>Photosnap</p>
              <div className="flex gap-4">
                {tags.map((tag) => (
                  <Badge key={tag.id}>{tag.text}</Badge>
                ))}
              </div>
            </div>
            <p>Senior Frontend Developer</p>
            <div className="flex gap-4">
              <p>1d ago</p>
              <p>Part Time</p>
              <p>Remote</p>
            </div>
          </div>
          <div className="flex-1 flex gap-4 justify-end">
            {skills.map((x) => (
              <Badge key={x}>{x}</Badge>
            ))}
          </div>
        </div>
        <div className="border-l-8 border-green-400 flex gap-4 items-center p-10 my-10 shadow-md">
          <ManageIcon />
          <div className="flex-1">
            <div className="flex gap-4">
              <p>Photosnap</p>
              <div className="flex gap-4">
                {tags.map((tag) => (
                  <Badge key={tag.id}>{tag.text}</Badge>
                ))}
              </div>
            </div>
            <p>Senior Frontend Developer</p>
            <div className="flex gap-4">
              <p>1d ago</p>
              <p>Part Time</p>
              <p>Remote</p>
            </div>
          </div>
          <div className="flex-1 flex gap-4 justify-end">
            {skills.map((x) => (
              <Badge key={x}>{x}</Badge>
            ))}
          </div>
        </div>
        <div className="border-l-8 border-green-400 flex gap-4 items-center p-10 my-10 shadow-md">
          <ManageIcon />
          <div className="flex-1">
            <div className="flex gap-4">
              <p>Photosnap</p>
              <div className="flex gap-4">
                {tags.map((tag) => (
                  <Badge key={tag.id}>{tag.text}</Badge>
                ))}
              </div>
            </div>
            <p>Senior Frontend Developer</p>
            <div className="flex gap-4">
              <p>1d ago</p>
              <p>Part Time</p>
              <p>Remote</p>
            </div>
          </div>
          <div className="flex-1 flex gap-4 justify-end">
            {skills.map((x) => (
              <Badge key={x}>{x}</Badge>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Jobs;
