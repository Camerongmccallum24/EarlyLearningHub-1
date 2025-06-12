import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqItems } from "@/data/content";

export default function FAQ() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredFAQs = faqItems.filter(
    (item) =>
      item.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.a.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const faqCategories = [
    {
      title: "Working at Regional Childcare - General",
      items: filteredFAQs.slice(0, 5)
    },
    {
      title: "Benefits & Support",
      items: filteredFAQs.slice(5, 8)
    }
  ];

  return (
    <div className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-primary mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about building your career with Regional Childcare
          </p>
        </div>

        {/* Search */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <i className="fas fa-search absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
            <Input
              type="text"
              placeholder="Search FAQs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 py-4 text-lg"
            />
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white rounded-xl shadow-sm p-6 text-center">
            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-clock text-primary text-xl"></i>
            </div>
            <h3 className="font-semibold text-primary mb-2">5 Business Days</h3>
            <p className="text-gray-600 text-sm">Average response time for applications</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-6 text-center">
            <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-phone text-secondary text-xl"></i>
            </div>
            <h3 className="font-semibold text-primary mb-2">1800 123 456</h3>
            <p className="text-gray-600 text-sm">Call us for immediate assistance</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm p-6 text-center">
            <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-4">
              <i className="fas fa-envelope text-accent text-xl"></i>
            </div>
            <h3 className="font-semibold text-primary mb-2">Email Support</h3>
            <p className="text-gray-600 text-sm">careers@regionalchildcare.com</p>
          </div>
        </div>

        {/* FAQ Categories */}
        <div className="max-w-4xl mx-auto">
          {searchTerm ? (
            // Show filtered results
            <div>
              <h2 className="text-2xl font-bold text-primary mb-8">
                Search Results ({filteredFAQs.length} found)
              </h2>
              {filteredFAQs.length === 0 ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="fas fa-search text-gray-400 text-xl"></i>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">No results found</h3>
                  <p className="text-gray-600 mb-4">
                    Try different keywords or browse all FAQs below.
                  </p>
                  <Button onClick={() => setSearchTerm("")} variant="outline">
                    Clear search
                  </Button>
                </div>
              ) : (
                <Accordion type="single" collapsible className="space-y-4">
                  {filteredFAQs.map((item, index) => (
                    <AccordionItem key={index} value={`search-item-${index}`} className="bg-white rounded-xl shadow-sm px-6">
                      <AccordionTrigger className="text-left text-lg font-semibold text-primary hover:no-underline">
                        {item.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600 leading-relaxed">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              )}
            </div>
          ) : (
            // Show categorized FAQs
            <div className="space-y-12">
              {faqCategories.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <h2 className="text-2xl font-bold text-primary mb-8">{category.title}</h2>
                  <Accordion type="single" collapsible className="space-y-4">
                    {category.items.map((item, index) => (
                      <AccordionItem 
                        key={index} 
                        value={`category-${categoryIndex}-item-${index}`} 
                        className="bg-white rounded-xl shadow-sm px-6"
                      >
                        <AccordionTrigger className="text-left text-lg font-semibold text-primary hover:no-underline">
                          {item.q}
                        </AccordionTrigger>
                        <AccordionContent className="text-gray-600 leading-relaxed">
                          {item.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Contact Section */}
        <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-12 mt-20">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-primary mb-6">Still Have Questions?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Our team is here to help you with any questions about career opportunities, 
              application processes, or life in regional Queensland.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <div className="bg-white p-6 rounded-xl">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-phone text-primary text-xl"></i>
                </div>
                <h3 className="font-semibold text-primary mb-2">Call Us</h3>
                <p className="text-gray-600 mb-4">Speak directly with our HR team</p>
                <p className="text-primary font-medium">1800 123 456</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl">
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-envelope text-secondary text-xl"></i>
                </div>
                <h3 className="font-semibold text-primary mb-2">Email Us</h3>
                <p className="text-gray-600 mb-4">Get detailed answers to your questions</p>
                <p className="text-primary font-medium">careers@regionalchildcare.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
