import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  BookOpen,
  GraduationCap,
  Users,
  Globe,
  BookText,
  FileText,
  ExternalLink,
  Linkedin,
  BookIcon,
  MapPin,
  Mail,
  School,
  Bookmark,
  Award,
  Calendar,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router";
import Lect from "../assets/lecturer/1.jpg";

export default function LecturerProfile() {
  return (
    <div className=" mx-auto py-6 ">
      {/* Profile Header */}
      <div className="bg-white shadow-lg rounded-2xl overflow-hidden mb-6">
        <div className="relative bg-gradient-to-r from-[] to-[#e2ffac] h-32 md:h-40"></div>

        <div className="px-4 -mt-16 md:-mt-20 relative z-10">
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-lg overflow-hidden">
              <img
                src={Lect}
                alt="Dr. Jovia Haruna Salifu"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="text-center mt-4">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                Dr. Jovia Haruna Salifu
              </h1>
              <p className="text-sm md:text-base text-gray-600">
                Lecturer, Centre for African Studies
              </p>
            </div>

            {/* Social and Contact Links */}
            <div className="flex space-x-3 mt-4">
              {[
                {
                  icon: <FileText className="h-5 w-5" />,
                  link: "https://josalifu.wordpress.com/",
                  title: "Personal Blog",
                },
                {
                  icon: <Linkedin className="h-5 w-5" />,
                  link: "https://gh.linkedin.com/in/jovia-salifu-ph-d-665a9a36",
                  title: "LinkedIn",
                },
                {
                  icon: <BookIcon className="h-5 w-5" />,
                  link: "https://scholar.google.com/citations?user=NBWnkZAAAAAJ&hl=en",
                  title: "Google Scholar",
                },
              ].map((social, index) => (
                <Link
                  key={index}
                  to={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:bg-blue-50 p-2 rounded-full transition-colors"
                >
                  {social.icon}
                  <span className="sr-only">{social.title}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Contact and Professional Info */}
      <ProfileTabs />
      <ContactSection />

      {/* Tabbed Content */}
    </div>
  );
}
function ProfileTabs() {
  return (
    <Tabs defaultValue="biography" className="w-full bg">
      <div className="relative mb-6">
        <TabsList className="w-full h-auto  flex flex-wrap justify-start gap-1 bg-white p-1">
          {[
            {
              value: "biography",
              label: "Biography",
              icon: <BookText className="h-4 w-4" />,
            },
            {
              value: "qualifications",
              label: "Qualifications",
              icon: <GraduationCap className="h-4 w-4" />,
            },
            {
              value: "teaching",
              label: "Teaching",
              icon: <School className="h-4 w-4" />,
            },
            {
              value: "research",
              label: "Research",
              icon: <Bookmark className="h-4 w-4" />,
            },
            {
              value: "publications",
              label: "Publications",
              icon: <BookOpen className="h-4 w-4" />,
            },
            {
              value: "blog",
              label: "Blog",
              icon: <FileText className="h-4 w-4" />,
            },
          ].map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className="flex items-center gap-2 px-4 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-full transition-all"
            >
              {tab.icon}
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
        <Separator className="mt-3" />
      </div>

      {/* Biography Tab */}
      <TabsContent
        value="biography"
        className="mt-0 animate-in fade-in-50 duration-300"
      >
        <Card className="border-t-4 border-t-primary shadow-sm hover:shadow-md transition-all">
          <CardHeader className="pb-2">
            <CardTitle className="text-xl flex items-center gap-2 text-primary">
              <BookText className="h-5 w-5" /> Biography
            </CardTitle>
          </CardHeader>
          <CardContent className="prose prose-slate max-w-none">
            <p className="mb-4 leading-relaxed">
              Jovia Salifu is a lecturer at the Centre for African Studies. He
              teaches courses on slavery and colonialism in Africa. His research
              interest is mainly in the area of the economy, particularly the
              link between economic activities/choices and social/cultural
              processes.
            </p>
            <p className="leading-relaxed">
              He has done research on the impact of financialisation on gendered
              livelihoods in Ghana, gendered economic activity in a matrilineal
              setting, professional change in social work, etc. He graduated
              with a PhD in African Studies from the University of Birmingham
              where he remains an honorary research fellow.
            </p>
          </CardContent>
        </Card>
      </TabsContent>

      {/* Qualifications Tab */}
      <TabsContent
        value="qualifications"
        className="mt-0 animate-in fade-in-50 duration-300"
      >
        <Card className="border-t-4 border-t-primary shadow-sm hover:shadow-md transition-all">
          <CardHeader className="pb-2">
            <CardTitle className="text-xl flex items-center gap-2 text-primary">
              <GraduationCap className="h-5 w-5" /> Qualifications
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {[
                {
                  degree: "PhD African Studies",
                  institution: "University of Birmingham, United Kingdom",
                  year: "July 2019",
                  icon: <Award className="h-5 w-5" />,
                },
                {
                  degree: "MA African Studies",
                  institution: "University of Birmingham, United Kingdom",
                  year: "December 2013",
                  icon: <Award className="h-5 w-5" />,
                },
                {
                  degree: "BA Sociology with Psychology",
                  institution: "University of Ghana, Ghana",
                  year: "May 2010",
                  icon: <Award className="h-5 w-5" />,
                },
              ].map((qual, index) => (
                <div
                  key={index}
                  className="flex gap-4 p-4 rounded-lg border border-muted bg-card hover:bg-muted/50 transition-colors"
                >
                  <div className="flex-shrink-0 mt-1">
                    <div className="bg-primary/10 p-2 rounded-full">
                      {qual.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{qual.degree}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <School className="h-4 w-4 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">
                        {qual.institution}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground">
                        {qual.year}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      {/* Teaching Tab */}
      <TabsContent
        value="teaching"
        className="mt-0 animate-in fade-in-50 duration-300"
      >
        <Card className="border-t-4 border-t-primary shadow-sm hover:shadow-md transition-all">
          <CardHeader className="pb-2">
            <CardTitle className="text-xl flex items-center gap-2 text-primary">
              <Users className="h-5 w-5" /> Teaching Experience
            </CardTitle>
          </CardHeader>
          <CardContent>
            <h3 className="font-semibold mb-4 text-lg">
              Undergraduate Courses Taught
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Colonialism in Africa and its impact",
                "The impact of slavery and the slave trade in Africa",
                "The 1992 constitution and the process of nation-building",
                "Globalisation and the new world order",
              ].map((course, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 rounded-lg border border-muted hover:bg-muted/50 transition-colors"
                >
                  <div className="bg-primary/10 p-2 rounded-full flex-shrink-0 mt-0.5">
                    <School className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm">{course}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      {/* Research Tab */}
      <TabsContent
        value="research"
        className="mt-0 animate-in fade-in-50 duration-300"
      >
        <Card className="border-t-4 border-t-primary shadow-sm hover:shadow-md transition-all">
          <CardHeader className="pb-2">
            <CardTitle className="text-xl flex items-center gap-2 text-primary">
              <Globe className="h-5 w-5" /> Areas of Specialization
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "The economy of slavery in Africa",
                "Colonial and post-colonial studies",
                "Financialisation in Africa",
                "Contemporary livelihoods in Africa",
                "Matrilineal kinship in Africa",
              ].map((area, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 p-3 rounded-lg border border-muted hover:bg-muted/50 transition-colors"
                >
                  <div className="bg-primary/10 p-2 rounded-full flex-shrink-0 mt-0.5">
                    <Bookmark className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm">{area}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      {/* Publications Tab */}
      <TabsContent
        value="publications"
        className="mt-0 animate-in fade-in-50 duration-300"
      >
        <Card className="border-t-4 border-t-primary shadow-sm hover:shadow-md transition-all">
          <CardHeader className="pb-2">
            <CardTitle className="text-xl flex items-center gap-2 text-primary">
              <BookOpen className="h-5 w-5" /> Publications
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="p-4 rounded-lg border border-muted hover:bg-muted/50 transition-colors">
                <div className="flex items-start gap-3">
                  <div className="bg-primary/10 p-2 rounded-full flex-shrink-0 mt-1">
                    <BookOpen className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">
                      Economic change and occultic sika bone: market women's
                      responses to increased financialisation in Ghana
                    </h3>
                    <Badge variant="outline" className="mt-2">
                      African Studies Review, 64(4), 938–958 (2021)
                    </Badge>
                    <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                      Set in a context where material accumulation is valorized,
                      this article analyzes narratives of sika bone (bad money)
                      as expressions of economic uncertainty by market women
                      operating in an era of increased financialization. The
                      ethnographic evidence supports previous arguments about
                      the impact of economic change in this millennium, a change
                      that fosters both rationality and superstition in equal
                      measure.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      {/* Blog Tab */}
      <TabsContent
        value="blog"
        className="mt-0 animate-in fade-in-50 duration-300"
      >
        <Card className="border-t-4 border-t-primary shadow-sm hover:shadow-md transition-all">
          <CardHeader className="pb-2">
            <CardTitle className="text-xl flex items-center gap-2 text-primary">
              <FileText className="h-5 w-5" /> Personal Blog
            </CardTitle>
            <CardDescription>
              Recent posts from Dr. Salifu's blog "Thoughts of a Free Mind"
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {[
                {
                  title:
                    'Kubolor\'s "Never go change": a story of the pampered servants',
                  date: "January 28, 2020",
                  excerpt:
                    "At the start of a new decade, I thought I'd share my favourite song of the last one. I must confess that I find it really difficult listening to Wanluv the Kubolor's song \"Never go change\" without shedding tears...",
                  link: "https://josalifu.wordpress.com/",
                },
                {
                  title: "Let's Treat Women Better",
                  date: "February 25, 2016",
                  excerpt:
                    "And since we all came from a woman, got our name from a woman and our game from a woman, I wonder why we take from our women, why we rape our women...",
                  link: "https://josalifu.wordpress.com/",
                },
              ].map((post, index) => (
                <div key={index} className="group">
                  <div className="p-4 rounded-lg border border-muted group-hover:bg-muted/50 transition-colors">
                    <Link
                      to={post.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start gap-3"
                    >
                      <div className="bg-primary/10 p-2 rounded-full flex-shrink-0 mt-1 group-hover:bg-primary/20 transition-colors">
                        <FileText className="h-4 w-4 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                            {post.title}
                          </h3>
                          <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors ml-2 flex-shrink-0" />
                        </div>
                        <Badge variant="outline" className="mt-2">
                          <Calendar className="h-3 w-3 mr-1" />
                          {post.date}
                        </Badge>
                        <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                          {post.excerpt}
                        </p>
                      </div>
                    </Link>
                  </div>
                  {index < 1 && <Separator className="my-4" />}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  );
}

// import { Globe, Mail, MapPin, Users } from "lucide-react"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

function ContactSection() {
  const memberships = [
    "Ghana Studies Association",
    "African Studies Association of Africa",
    "African Studies Association",
    "African Studies Association of the United Kingdom",
    "Association for the Study of the Middle East and Africa",
  ];

  return (
    <div className="grid md:grid-cols-3 gap-6 my-4">
      <Card className="md:col-span-1 border-l-4 border-l-primary transition-all duration-300 hover:shadow-md">
        <CardHeader className="pb-2">
          <CardTitle className="text-xl flex items-center gap-2 text-primary">
            <Mail className="h-5 w-5" />
            <span>Contact Details</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="group flex items-start gap-3 p-2 rounded-lg transition-colors hover:bg-muted/50">
              <Mail className="h-5 w-5 text-primary mt-0.5 group-hover:scale-110 transition-transform" />
              <div className="space-y-1">
                <div className="font-medium text-sm text-muted-foreground">
                  Email
                </div>
                <Link
                  to="mailto:jsalifu@uew.edu.gh"
                  className="text-foreground hover:text-primary transition-colors"
                >
                  jsalifu@uew.edu.gh
                </Link>
              </div>
            </div>

            <div className="group flex items-start gap-3 p-2 rounded-lg transition-colors hover:bg-muted/50">
              <MapPin className="h-5 w-5 text-primary mt-0.5 group-hover:scale-110 transition-transform" />
              <div className="space-y-1">
                <div className="font-medium text-sm text-muted-foreground">
                  Location
                </div>
                <span className="text-foreground">
                  Centre for African Studies, University of Education, Winneba
                </span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="md:col-span-2 border-l-4 border-l-primary transition-all duration-300 hover:shadow-md">
        <CardHeader className="pb-2">
          <CardTitle className="text-xl flex items-center gap-2 text-primary">
            <Users className="h-5 w-5" />
            <span>Professional Memberships</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {memberships.map((membership, index) => (
              <div
                key={index}
                className="group flex items-center gap-3 p-2 rounded-lg transition-colors hover:bg-muted/50"
              >
                <div className="bg-primary/10 p-2 rounded-full group-hover:bg-primary/20 transition-colors">
                  <Globe className="h-4 w-4 text-primary" />
                </div>
                <span className="text-sm font-medium">{membership}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
