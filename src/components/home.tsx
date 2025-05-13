import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import HeroSection from "./HeroSection";
import ShowcaseGallery from "./ShowcaseGallery";
import { Calendar, CalendarIcon } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const HomePage = () => {
  // Mock data for galleries
  const childrenShowsData = [
    {
      id: 1,
      title: "Birthday Magic",
      description: "Perfect entertainment for children's birthday parties",
      image:
        "https://images.unsplash.com/photo-1528495612343-9ca9f4a4de28?w=800&q=80",
      category: "birthday",
    },
    {
      id: 2,
      title: "School Events",
      description: "Magical performances for school assemblies and events",
      image:
        "https://images.unsplash.com/photo-1551966775-a4ddc8df052b?w=800&q=80",
      category: "school",
    },
    {
      id: 3,
      title: "Holiday Specials",
      description: "Themed magic shows for holidays and special occasions",
      image:
        "https://images.unsplash.com/photo-1603400521630-9f2de124b33b?w=800&q=80",
      category: "holiday",
    },
  ];

  const adultShowsData = [
    {
      id: 1,
      title: "Corporate Events",
      description:
        "Sophisticated magic for corporate gatherings and team building",
      image:
        "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800&q=80",
      category: "corporate",
    },
    {
      id: 2,
      title: "Wedding Entertainment",
      description: "Elegant close-up magic for wedding receptions",
      image:
        "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
      category: "wedding",
    },
    {
      id: 3,
      title: "Dinner Parties",
      description: "Intimate magical experiences for private dinner parties",
      image:
        "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=800&q=80",
      category: "private",
    },
  ];

  // Mock blog posts
  const blogPosts = [
    {
      id: 1,
      title: "The Art of Misdirection",
      excerpt:
        "Learn how professional magicians use psychological techniques to create wonder.",
      date: "2023-06-15",
      image:
        "https://images.unsplash.com/photo-1618944847828-82e943c3bdb7?w=800&q=80",
    },
    {
      id: 2,
      title: "Behind the Scenes: Preparing for a Magic Show",
      excerpt:
        "Discover the preparation that goes into creating a memorable magical experience.",
      date: "2023-05-22",
      image:
        "https://images.unsplash.com/photo-1543157145-f78c636d023d?w=800&q=80",
    },
    {
      id: 3,
      title: "Magic Through the Ages",
      excerpt:
        "A brief history of magic performance from ancient times to modern day.",
      date: "2023-04-10",
      image:
        "https://images.unsplash.com/photo-1571173729436-68d93488c87f?w=800&q=80",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About Magic Merlin
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg max-w-3xl mx-auto">
            With over 15 years of experience, Magic Merlin has been captivating
            audiences across Le Havre and beyond. Specializing in both
            children's entertainment and sophisticated adult performances,
            Merlin brings wonder and amazement to any event.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-2xl font-semibold mb-4">
              The Magician's Journey
            </h3>
            <p className="mb-4">
              Magic Merlin discovered his passion for illusion at a young age
              and has dedicated his life to perfecting the art of magic. Trained
              by some of France's most renowned magicians, Merlin combines
              classic techniques with innovative approaches to create truly
              unique performances.
            </p>
            <p>
              Whether performing for children with wide-eyed wonder or
              entertaining sophisticated adult audiences, Magic Merlin creates
              unforgettable moments of astonishment and joy.
            </p>
            <Button className="mt-6 w-fit">Learn More</Button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="rounded-lg overflow-hidden shadow-xl"
          >
            <img
              src="https://images.unsplash.com/photo-1503095396549-807759245b35?w=800&q=80"
              alt="Magic Merlin performing"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Performances Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Magical Performances
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg max-w-3xl mx-auto">
              Magic Merlin offers a variety of performances tailored to
              different audiences and occasions. Explore the options below to
              find the perfect magical entertainment for your event.
            </p>
          </motion.div>

          <Tabs defaultValue="children" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
              <TabsTrigger value="children">Children's Shows</TabsTrigger>
              <TabsTrigger value="adults">Adult Performances</TabsTrigger>
            </TabsList>
            <TabsContent value="children">
              <ShowcaseGallery
                items={childrenShowsData}
                categories={["all", "birthday", "school", "holiday"]}
              />
            </TabsContent>
            <TabsContent value="adults">
              <ShowcaseGallery
                items={adultShowsData}
                categories={["all", "corporate", "wedding", "private"]}
              />
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Magic Blog</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg max-w-3xl mx-auto">
            Discover the secrets behind the magic, tips for aspiring magicians,
            and updates on upcoming events.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardContent className="flex-grow flex flex-col p-5">
                  <div className="text-sm text-muted-foreground mb-2">
                    {post.date}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                  <p className="text-muted-foreground mb-4 flex-grow">
                    {post.excerpt}
                  </p>
                  <Button variant="outline" className="w-fit mt-auto">
                    Read More
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button variant="outline" size="lg">
            View All Posts
          </Button>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Book Magic Merlin
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg max-w-3xl mx-auto">
              Ready to bring the wonder of magic to your event? Check
              availability and submit a booking inquiry below.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-card rounded-lg p-6 shadow-lg"
            >
              <h3 className="text-2xl font-semibold mb-6">
                Check Availability
              </h3>
              <div className="mb-6">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left font-normal"
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      <span>Select a date</span>
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar mode="single" className="rounded-md border" />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Available Time Slots:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    <Button variant="outline" size="sm">
                      10:00 AM
                    </Button>
                    <Button variant="outline" size="sm">
                      2:00 PM
                    </Button>
                    <Button variant="outline" size="sm">
                      4:00 PM
                    </Button>
                    <Button variant="outline" size="sm">
                      7:00 PM
                    </Button>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Performance Types:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    <Button variant="outline" size="sm">
                      Children's Show
                    </Button>
                    <Button variant="outline" size="sm">
                      Close-up Magic
                    </Button>
                    <Button variant="outline" size="sm">
                      Stage Performance
                    </Button>
                    <Button variant="outline" size="sm">
                      Mentalism
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-card rounded-lg p-6 shadow-lg"
            >
              <h3 className="text-2xl font-semibold mb-6">Booking Inquiry</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-1"
                    >
                      Name
                    </label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-1"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="event-type"
                    className="block text-sm font-medium mb-1"
                  >
                    Event Type
                  </label>
                  <Input
                    id="event-type"
                    placeholder="Birthday, Wedding, Corporate, etc."
                  />
                </div>
                <div>
                  <label
                    htmlFor="event-date"
                    className="block text-sm font-medium mb-1"
                  >
                    Preferred Date
                  </label>
                  <Input id="event-date" placeholder="MM/DD/YYYY" />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-1"
                  >
                    Additional Details
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us more about your event..."
                    rows={4}
                  />
                </div>
                <Button type="submit" className="w-full">
                  Submit Inquiry
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Clients Say
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Sophie Martin",
              role: "Birthday Party Host",
              quote:
                "Magic Merlin was the highlight of my daughter's birthday party! The children were completely mesmerized, and the adults were equally impressed.",
              avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sophie",
            },
            {
              name: "Jean Dupont",
              role: "Corporate Event Manager",
              quote:
                "We hired Magic Merlin for our company's annual gala, and he exceeded all expectations. His close-up magic created an interactive experience our guests are still talking about.",
              avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jean",
            },
            {
              name: "Marie Leclerc",
              role: "Wedding Planner",
              quote:
                "Adding Magic Merlin to our clients' wedding reception was a brilliant decision. He created magical moments that perfectly complemented the celebration.",
              avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marie",
            },
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-card p-6 rounded-lg shadow-md"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
              <p className="italic">"{testimonial.quote}"</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-12 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Magic Merlin</h3>
            <p className="mb-4">
              Professional magician bringing wonder and amazement to events
              across Le Havre and beyond.
            </p>
            <div className="flex space-x-4">
              {/* Social media icons would go here */}
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center"></div>
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center"></div>
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center"></div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>Le Havre, France</li>
              <li>contact@magicmerlin.fr</li>
              <li>+33 1 23 45 67 89</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-muted-foreground/20 text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Magic Merlin. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
