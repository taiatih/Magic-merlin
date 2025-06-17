import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

interface ShowItem {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  videoUrl?: string;
}

interface ShowcaseGalleryProps {
  title?: string;
  description?: string;
  items?: ShowItem[];
  categories?: string[];
  variant?: "children" | "adult";
}

const ShowcaseGallery: React.FC<ShowcaseGalleryProps> = ({
  title = "Spectacles de magie",
  description =
    "Découvrez une sélection de numéros ensorcelants adaptés à tous les publics.",
  items = [
    {
      id: "1",
      title: "Manipulation de cartes",
      description:
        "Découvrez une dextérité incroyable avec des cartes qui vous laissera sans voix.",
      image:
        "https://images.unsplash.com/photo-1612404459571-ff53a7f739a0?w=800&q=80",
      category: "Close-up",
      videoUrl: "https://example.com/video1",
    },
    {
      id: "2",
      title: "Merveille lévitante",
      description:
        "Voyez l'impossible lorsque les objets défient la gravité sous vos yeux.",
      image:
        "https://images.unsplash.com/photo-1618513462242-4b6c5d2c1ba4?w=800&q=80",
      category: "Scène",
      videoUrl: "https://example.com/video2",
    },
    {
      id: "3",
      title: "Conte magique",
      description:
        "Un spectacle narratif mêlant illusion et histoires captivantes.",
      image:
        "https://images.unsplash.com/photo-1568515045052-f9a854d70bfd?w=800&q=80",
      category: "Enfants",
      videoUrl: "https://example.com/video3",
    },
    {
      id: "4",
      title: "Lecture de pensée",
      description:
        "Soyez étonné lorsque vos pensées sont devinées lors de ce numéro de mentalisme.",
      image:
        "https://images.unsplash.com/photo-1603574670812-d24560880210?w=800&q=80",
      category: "Mentalisme",
      videoUrl: "https://example.com/video4",
    },
    {
      id: "5",
      title: "Numéro de disparition",
      description:
        "Admirez la disparition puis la réapparition d'objets et de volontaires de façon inattendue.",
      image:
        "https://images.unsplash.com/photo-1576244296839-2c4b8a4b2b1b?w=800&q=80",
      category: "Scène",
      videoUrl: "https://example.com/video5",
    },
  ],
  categories = ["Tous", "Close-up", "Scène", "Enfants", "Mentalisme"],
  variant = "adult",
}) => {
  const [activeCategory, setActiveCategory] = useState("Tous");
  const [selectedItem, setSelectedItem] = useState<ShowItem | null>(null);

  const filteredItems =
    activeCategory === "Tous"
      ? items
      : items.filter((item) => item.category === activeCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const openModal = (item: ShowItem) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  const bgColor = variant === "children" ? "bg-purple-50" : "bg-slate-50";
  const accentColor =
    variant === "children" ? "text-purple-600" : "text-blue-600";

  return (
    <div className={`w-full py-16 ${bgColor}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${accentColor}`}>
            {title}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{description}</p>
        </div>

        <Tabs defaultValue="gallery" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="gallery">Galerie</TabsTrigger>
            <TabsTrigger value="carousel">Carrousel</TabsTrigger>
          </TabsList>

          <div className="mb-8">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeCategory === category ? "default" : "outline"}
                  onClick={() => setActiveCategory(category)}
                  className={activeCategory === category ? accentColor : ""}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          <TabsContent value="gallery" className="w-full">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <AnimatePresence>
                {filteredItems.map((item) => (
                  <motion.div
                    key={item.id}
                    variants={itemVariants}
                    layout
                    className="h-full"
                  >
                    <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow duration-300">
                      <div className="relative aspect-video overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                        {item.videoUrl && (
                          <Button
                            size="icon"
                            className="absolute bottom-4 right-4 rounded-full bg-white/80 hover:bg-white"
                            onClick={() => openModal(item)}
                          >
                            <Play className="h-5 w-5 text-gray-800" />
                          </Button>
                        )}
                      </div>
                      <CardContent className="p-5">
                        <h3 className="text-xl font-semibold mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 mb-4">{item.description}</p>
                        <div className="flex justify-between items-center">
                          <span className="text-sm px-3 py-1 bg-gray-100 rounded-full">
                            {item.category}
                          </span>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => openModal(item)}
                          >
                            Voir les détails
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </TabsContent>

          <TabsContent value="carousel" className="w-full">
            <Carousel className="w-full max-w-4xl mx-auto">
              <CarouselContent>
                {filteredItems.map((item) => (
                  <CarouselItem
                    key={item.id}
                    className="md:basis-1/2 lg:basis-1/3"
                  >
                    <div className="p-1">
                      <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                        <div className="relative aspect-video overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-full object-cover"
                          />
                          {item.videoUrl && (
                            <Button
                              size="icon"
                              className="absolute bottom-4 right-4 rounded-full bg-white/80 hover:bg-white"
                              onClick={() => openModal(item)}
                            >
                              <Play className="h-5 w-5 text-gray-800" />
                            </Button>
                          )}
                        </div>
                        <CardContent className="p-4">
                          <h3 className="text-lg font-semibold mb-2">
                            {item.title}
                          </h3>
                          <p className="text-gray-600 text-sm line-clamp-2">
                            {item.description}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center mt-8 gap-4">
                <CarouselPrevious className="relative static transform-none">
                  <ChevronLeft className="h-5 w-5" />
                  <span className="sr-only">Précédent</span>
                </CarouselPrevious>
                <CarouselNext className="relative static transform-none">
                  <ChevronRight className="h-5 w-5" />
                  <span className="sr-only">Suivant</span>
                </CarouselNext>
              </div>
            </Carousel>
          </TabsContent>
        </Tabs>
      </div>

      {/* Modal for selected item */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="bg-white rounded-lg max-w-3xl w-full overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-video">
                {selectedItem.videoUrl ? (
                  <div className="w-full h-full flex items-center justify-center bg-black">
                    <div className="text-white text-center p-8">
                      <Play className="h-16 w-16 mx-auto mb-4" />
                      <p>La vidéo apparaîtrait ici</p>
                      <p className="text-sm text-gray-400">
                        ({selectedItem.videoUrl})
                      </p>
                    </div>
                  </div>
                ) : (
                  <img
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">
                  {selectedItem.title}
                </h3>
                <span className="inline-block px-3 py-1 bg-gray-100 rounded-full text-sm mb-4">
                  {selectedItem.category}
                </span>
                <p className="text-gray-600 mb-6">{selectedItem.description}</p>
                <div className="flex justify-end">
                  <Button onClick={closeModal}>Fermer</Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ShowcaseGallery;
