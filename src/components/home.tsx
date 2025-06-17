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
      id: "1",
      title: "Anniversaires enchantés",
      description: "Animation idéale pour les fêtes d'anniversaire des enfants",
      image:
        "https://images.unsplash.com/photo-1528677948393-e44bfb80b6a7?auto=format&w=800&q=80",
      category: "birthday",
    },
    {
      id: "2",
      title: "Événements scolaires",
      description: "Spectacles magiques pour kermesses et fêtes d'école",
      image:
        "https://images.unsplash.com/photo-1508942934688-6e39d2bca632?auto=format&w=800&q=80",
      category: "school",
    },
    {
      id: "3",
      title: "Animations de saison",
      description: "Shows thématiques pour les fêtes et occasions spéciales",
      image:
        "https://images.unsplash.com/photo-1544117518-aeb429b1f264?auto=format&w=800&q=80",
      category: "holiday",
    },
  ];

  const adultShowsData = [
    {
      id: "1",
      title: "Soirées d'entreprise",
      description:
        "Magie raffinée pour séminaires, cocktails et team building",
      image:
        "https://images.unsplash.com/photo-1564083953515-cf70e14c28b1?auto=format&w=800&q=80",
      category: "corporate",
    },
    {
      id: "2",
      title: "Animations de mariage",
      description: "Close-up élégant pour sublimer les réceptions",
      image:
        "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&w=800&q=80",
      category: "wedding",
    },
    {
      id: "3",
      title: "Dîners privés",
      description: "Expériences magiques intimistes pour vos soirées",
      image:
        "https://images.unsplash.com/photo-1458081139467-7889de700074?auto=format&w=800&q=80",
      category: "private",
    },
  ];

  // Mock blog posts
  const blogPosts = [
    {
      id: "1",
      title: "L'art de la distraction",
      excerpt:
        "Découvrez comment les magiciens utilisent la psychologie pour créer l'émerveillement.",
      date: "2023-06-15",
      image:
        "https://images.unsplash.com/photo-1618944847828-82e943c3bdb7?auto=format&w=800&q=80",
    },
    {
      id: "2",
      title: "Dans les coulisses d'un spectacle",
      excerpt:
        "Plongez dans la préparation nécessaire à un show inoubliable.",
      date: "2023-05-22",
      image:
        "https://images.unsplash.com/photo-1543157145-f78c636d023d?auto=format&w=800&q=80",
    },
    {
      id: "3",
      title: "La magie à travers les âges",
      excerpt:
        "Petite histoire de l'illusion, de l'antiquité à nos jours.",
      date: "2023-04-10",
      image:
        "https://images.unsplash.com/photo-1571173729436-68d93488c87f?auto=format&w=800&q=80",
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
            À propos de Magic Merlin
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg max-w-3xl mx-auto">
            Fort de plus de 15 ans d'expérience, Magic Merlin émerveille les
            publics du Havre et d'ailleurs. Spécialisé à la fois dans
            l'animation pour enfants et les spectacles pour adultes,
            Merlin apporte surprise et enchantement à chaque événement.
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
              Le parcours du magicien
            </h3>
            <p className="mb-4">
              Magic Merlin découvre très tôt sa passion pour l'illusion et se
              consacre depuis à perfectionner son art. Formé par les plus grands
              magiciens de France, il mêle techniques classiques et idées
              innovantes pour proposer des shows uniques.
            </p>
            <p>
              Qu'il s'adresse aux enfants éblouis ou à un public adulte
              exigeant, Magic Merlin crée des moments inoubliables de surprise
              et de joie.
            </p>
            <Button className="mt-6 w-fit">En savoir plus</Button>
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
              Spectacles de magie
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg max-w-3xl mx-auto">
              Magic Merlin propose une grande variété de prestations adaptées à
              tous les publics et à toutes les occasions. Découvrez ci-dessous
              l'animation idéale pour votre événement.
            </p>
          </motion.div>

          <Tabs defaultValue="children" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
              <TabsTrigger value="children">Spectacles pour enfants</TabsTrigger>
              <TabsTrigger value="adults">Spectacles pour adultes</TabsTrigger>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Blog magique</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-lg max-w-3xl mx-auto">
            Découvrez les coulisses de la magie, des conseils pour les
            apprentis magiciens et toutes les actualités à venir.
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
                    Lire la suite
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button variant="outline" size="lg">
            Voir tous les articles
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
              Réserver Magic Merlin
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg max-w-3xl mx-auto">
              Prêt à apporter la magie à votre événement ? Vérifiez la
              disponibilité et envoyez votre demande ci-dessous.
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
                Vérifier la disponibilité
              </h3>
              <div className="mb-6">
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-start text-left font-normal"
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      <span>Choisir une date</span>
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar mode="single" className="rounded-md border" />
                  </PopoverContent>
                </Popover>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Créneaux disponibles :</h4>
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
                  <h4 className="font-medium mb-2">Types de prestation :</h4>
                  <div className="grid grid-cols-2 gap-2">
                    <Button variant="outline" size="sm">Spectacle enfants</Button>
                    <Button variant="outline" size="sm">Magie rapprochée</Button>
                    <Button variant="outline" size="sm">Show sur scène</Button>
                    <Button variant="outline" size="sm">Mentalisme</Button>
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
              <h3 className="text-2xl font-semibold mb-6">Demande de réservation</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-1"
                    >
                      Nom
                    </label>
                    <Input id="name" placeholder="Votre nom" />
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
                      placeholder="votre.email@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="event-type"
                    className="block text-sm font-medium mb-1"
                  >
                    Type d'événement
                  </label>
                  <Input
                    id="event-type"
                    placeholder="Anniversaire, Mariage, Entreprise..."
                  />
                </div>
                <div>
                  <label
                    htmlFor="event-date"
                    className="block text-sm font-medium mb-1"
                  >
                    Date souhaitée
                  </label>
                  <Input id="event-date" placeholder="JJ/MM/AAAA" />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium mb-1"
                  >
                    Détails supplémentaires
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Parlez-nous de votre événement..."
                    rows={4}
                  />
                </div>
                <Button type="submit" className="w-full">
                  Envoyer la demande
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
            Avis des clients
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Sophie Martin",
              role: "Organisatrice d'anniversaire",
              quote:
                "Magic Merlin was the highlight of my daughter's birthday party! The children were completely mesmerized, and the adults were equally impressed.",
              avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sophie",
            },
            {
              name: "Jean Dupont",
              role: "Responsable événementiel",
              quote:
                "We hired Magic Merlin for our company's annual gala, and he exceeded all expectations. His close-up magic created an interactive experience our guests are still talking about.",
              avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jean",
            },
            {
              name: "Marie Leclerc",
              role: "Wedding planner",
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
              Magicien professionnel apportant émerveillement aux événements du
              Havre et d'ailleurs.
            </p>
            <div className="flex space-x-4">
              {/* Social media icons would go here */}
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center"></div>
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center"></div>
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center"></div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  À propos
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Galerie
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
            © {new Date().getFullYear()} Magic Merlin. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
