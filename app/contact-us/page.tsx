"use client";

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Loader2 } from "lucide-react";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    enquirerType: "myself",
    enquirerName: "",
    enquirerFirstName: "",
    enquirerLastName: "",
    enquirerPhone: "",
    enquirerEmail: "",
    relationship: "",
    clientName: "",
    clientFirstName: "",
    clientLastName: "",
    clientPhone: "",
    clientEmail: "",
    region: "",
    ndisStatus: "",
    ndisNumber: "",
    heardAbout: "",
    heardAboutOther: "",
    service: "general",
    comments: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    alert("Thank you for your enquiry. We will be in touch shortly.");
    setFormData({
      enquirerType: "myself",
      enquirerName: "",
      enquirerFirstName: "",
      enquirerLastName: "",
      enquirerPhone: "",
      enquirerEmail: "",
      relationship: "",
      clientName: "",
      clientFirstName: "",
      clientLastName: "",
      clientPhone: "",
      clientEmail: "",
      region: "",
      ndisStatus: "",
      ndisNumber: "",
      heardAbout: "",
      heardAboutOther: "",
      service: "general",
      comments: "",
    });
  };

  const services = [
    "General Enquiry",
    "Activity Groups",
    "Carer Services",
    "Community Connections",
    "Counselling & Therapy",
    "Country Wellness Connections",
    "Distress Brief Support (DBS)",
    "Individual Support",
    "Plan Management",
    "Recovery Coaching",
    "Specialist Support Coordination",
    "Support Coordination",
    "Therapeutic Groups",
    "Wellness Connect",
  ];

  const regions = [
    "Central Metro",
    "Northern Metro",
    "Southern Metro",
    "APY",
    "Eyre",
    "Murray Mallee",
    "Limestone",
    "Fleurieu",
  ];

  const relationships = [
    "Self",
    "Parent",
    "Child",
    "Spouse",
    "Carer",
    "Support Coordinator",
    "Service Provider",
    "Friend",
    "Family Member",
    "Other",
  ];

  const heardAboutOptions = [
    "Google or Online ads",
    "Local area Coordinator",
    "Word of mouth",
    "Social media",
    "Poster/Brochure",
    "Referring organisation",
    "Other",
  ];

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-32 pb-16">
        {/* Header Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Contact Australian NDIS Today
          </h1>
          <p className="text-lg text-muted-foreground">
            Have questions about our NDIS supports, group programs, or services?
            Our team is here to help.
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 mb-16">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-card rounded-lg shadow-sm border border-border p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Submit Enquiry
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Enquiry Type */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      I am filling this form out for:
                    </label>
                    <div className="flex gap-4">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="enquirerType"
                          value="myself"
                          checked={formData.enquirerType === "myself"}
                          onChange={handleInputChange}
                          className="mr-2"
                        />
                        <span className="text-foreground">Myself</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="enquirerType"
                          value="someone-else"
                          checked={formData.enquirerType === "someone-else"}
                          onChange={handleInputChange}
                          className="mr-2"
                        />
                        <span className="text-foreground">Someone Else</span>
                      </label>
                    </div>
                  </div>

                  {/* Enquirer Details */}
                  <div>
                    <h3 className="font-semibold text-foreground mb-4">
                      Enquirer's Information
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <Input
                        type="text"
                        name="enquirerFirstName"
                        placeholder="First Name"
                        value={formData.enquirerFirstName}
                        onChange={handleInputChange}
                        className="border-input"
                      />
                      <Input
                        type="text"
                        name="enquirerLastName"
                        placeholder="Last Name"
                        value={formData.enquirerLastName}
                        onChange={handleInputChange}
                        className="border-input"
                      />
                      <Input
                        type="tel"
                        name="enquirerPhone"
                        placeholder="Phone/Mobile"
                        value={formData.enquirerPhone}
                        onChange={handleInputChange}
                        className="border-input"
                      />
                      <Input
                        type="email"
                        name="enquirerEmail"
                        placeholder="Email"
                        value={formData.enquirerEmail}
                        onChange={handleInputChange}
                        className="border-input"
                      />
                    </div>
                  </div>

                  {/* Relationship */}
                  {formData.enquirerType === "someone-else" && (
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Relationship with the Client:
                      </label>
                      <select
                        name="relationship"
                        value={formData.relationship}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
                      >
                        <option value="">Select relationship</option>
                        {relationships.map((rel) => (
                          <option key={rel} value={rel}>
                            {rel}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}

                  {/* Client Details (if someone else) */}
                  {formData.enquirerType === "someone-else" && (
                    <div>
                      <h3 className="font-semibold text-foreground mb-4">
                        Client's Information
                      </h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <Input
                          type="text"
                          name="clientFirstName"
                          placeholder="First Name"
                          value={formData.clientFirstName}
                          onChange={handleInputChange}
                          className="border-input"
                        />
                        <Input
                          type="text"
                          name="clientLastName"
                          placeholder="Last Name"
                          value={formData.clientLastName}
                          onChange={handleInputChange}
                          className="border-input"
                        />
                        <Input
                          type="tel"
                          name="clientPhone"
                          placeholder="Phone/Mobile"
                          value={formData.clientPhone}
                          onChange={handleInputChange}
                          className="border-input"
                        />
                        <Input
                          type="email"
                          name="clientEmail"
                          placeholder="Email"
                          value={formData.clientEmail}
                          onChange={handleInputChange}
                          className="border-input"
                        />
                      </div>
                    </div>
                  )}

                  {/* Region */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Region:
                    </label>
                    <select
                      name="region"
                      value={formData.region}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
                    >
                      <option value="">Select region</option>
                      {regions.map((region) => (
                        <option key={region} value={region}>
                          {region}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* NDIS Status */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      NDIS Status:
                    </label>
                    <div className="flex gap-4">
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="ndisStatus"
                          value="participant"
                          checked={formData.ndisStatus === "participant"}
                          onChange={handleInputChange}
                          className="mr-2"
                        />
                        <span className="text-foreground">
                          NDIS Participant
                        </span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="ndisStatus"
                          value="non-participant"
                          checked={formData.ndisStatus === "non-participant"}
                          onChange={handleInputChange}
                          className="mr-2"
                        />
                        <span className="text-foreground">
                          Non NDIS Participant
                        </span>
                      </label>
                    </div>
                  </div>

                  {/* NDIS Number */}
                  {formData.ndisStatus === "participant" && (
                    <Input
                      type="text"
                      name="ndisNumber"
                      placeholder="NDIS Number (9 digits, starts with 43)"
                      value={formData.ndisNumber}
                      onChange={handleInputChange}
                      className="border-input"
                    />
                  )}

                  {/* How did you hear about us */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      How did you hear about us?
                    </label>
                    <select
                      name="heardAbout"
                      value={formData.heardAbout}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
                    >
                      <option value="">Select option</option>
                      {heardAboutOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  {formData.heardAbout === "Other" && (
                    <Input
                      type="text"
                      name="heardAboutOther"
                      placeholder="Please specify"
                      value={formData.heardAboutOther}
                      onChange={handleInputChange}
                      className="border-input"
                    />
                  )}

                  {/* Service Interest */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      What service are you interested in?
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground"
                    >
                      {services.map((service) => (
                        <option key={service} value={service.toLowerCase()}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Comments */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Additional Comments:
                    </label>
                    <Textarea
                      name="comments"
                      placeholder="Tell us more about your enquiry..."
                      value={formData.comments}
                      onChange={handleInputChange}
                      rows={5}
                      className="border-input"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      "Submit Enquiry"
                    )}
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="lg:col-span-1">
              <div className="space-y-8">
                {/* Email */}
                <div className="bg-card rounded-lg shadow-sm border border-border p-6">
                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-3">
                        Email
                      </h3>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <p>
                          <span className="font-medium text-foreground">
                            General Queries:
                          </span>
                          <br />
                          <a
                            href="office@ausndisservices.com.au"
                            className="text-primary hover:underline"
                          >
                            office@ausndisservices.com.au
                          </a>
                        </p>
                        <p>
                          <span className="font-medium text-foreground">
                            Plan Management:
                          </span>
                          <br />
                          <a
                            href="mailto:office@ausndisservices.com.au"
                            className="text-primary hover:underline"
                          >
                            office@ausndisservices.com.au
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="bg-card rounded-lg shadow-sm border border-border p-6">
                  <div className="flex items-start gap-4">
                    <Phone className="w-6 h-6 text-primary shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-3">
                        Phone
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        <span className="font-medium text-foreground">Ph:</span>
                        <br />
                        <a
                          href="tel:0883784100"
                          className="text-primary hover:underline"
                        >
                          0415 777 143
                        </a>
                      </p>
                      <p className="text-sm text-muted-foreground mt-2">
                        <span className="font-medium text-foreground">
                          Fax:
                        </span>
                        <br />
                        0415 777 143
                      </p>
                    </div>
                  </div>
                </div>

                {/* Address */}
                <div className="bg-card rounded-lg shadow-sm border border-border p-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-foreground mb-3">
                        Locations
                      </h3>
                      <div className="space-y-3 text-sm text-muted-foreground">
                        <div>
                          <p className="font-medium text-foreground">
                            Head Office
                          </p>
                          <p>
                            73 Henley Beach Rd
                            <br />
                            Mile End, SA 5031
                          </p>
                        </div>
                        <div>
                          <p className="font-medium text-foreground">Postal</p>
                          <p>
                            PO Box 310
                            <br />
                            Marleston, SA 5033
                          </p>
                        </div>
                        <div>
                          <p className="font-medium text-foreground">
                            Service Areas
                          </p>
                          <p className="text-xs">
                            Mile End • Elizabeth • Christies Beach • Murray
                            Bridge • Fleurieu Peninsula • Mount Gambier •
                            Pukatja
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Explore Our Services CTA */}
          <div className="bg-secondary rounded-lg shadow-sm border border-border p-12 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-8">
              Explore Our Services
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-card rounded-lg p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  NDIS Support Workers
                </h3>
                <p className="text-muted-foreground mb-4">
                  Whether you're working toward independence, wanting to
                  reconnect with community, or simply need someone in your
                  corner, our team is here to support your recovery journey.
                </p>
              </div>
              <div className="bg-card rounded-lg p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Psychosocial Recovery Coaching
                </h3>
                <p className="text-muted-foreground mb-4">
                  Whether you're adjusting to your NDIS plan, rebuilding
                  routines, or navigating mental health challenges, Australian
                  NDIS Recovery Coaches walk alongside you every step of the
                  way.
                </p>
              </div>
              <div className="bg-card rounded-lg p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  NDIS Plan Management
                </h3>
                <p className="text-muted-foreground mb-4">
                  Simplify your NDIS experience with Australian NDIS's NDIS Plan
                  Management – expert support delivered with care, transparency
                  and trust.
                </p>
              </div>
            </div>
            <Button
              asChild
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 text-lg"
            >
              <a href="/contact-us">Submit Service Request</a>
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
