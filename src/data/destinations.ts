import canada from "@/assets/destinations/canada.jpg";
import uk from "@/assets/destinations/uk.jpg";
import usa from "@/assets/destinations/usa.jpg";
import australia from "@/assets/destinations/australia.jpg";
import germany from "@/assets/destinations/germany.jpg";
import ireland from "@/assets/destinations/ireland.jpg";
import dubai from "@/assets/destinations/dubai.jpg";
import malaysia from "@/assets/destinations/malaysia.jpg";
import malta from "@/assets/destinations/malta.jpg";
import qatar from "@/assets/destinations/qatar.jpg";

export type University = {
  name: string;
  city: string;
  note?: string;
};

export type FieldGroup = {
  field: string;
  universities: University[];
};

export type Destination = {
  slug: string;
  name: string;
  image: string;
  region: string;
  blurb: string;
  highlights: readonly string[];
  overview: string;
  groups: FieldGroup[];
};

export const destinations: Destination[] = [
  {
    slug: "canada",
    name: "Canada",
    image: canada,
    region: "North America",
    blurb:
      "Affordable world-class universities, post-study work permits and clear permanent residency pathways.",
    highlights: ["Express Entry PR", "PGWP up to 3 yrs", "Top-ranked colleges"],
    overview:
      "Canada hosts over 800,000 international students. Public universities are research-intensive and globally ranked, with PGWP work rights of up to 3 years and clear PR pathways via Express Entry and PNP.",
    groups: [
      {
        field: "Engineering & Technology",
        universities: [
          { name: "University of Toronto", city: "Toronto, ON" },
          { name: "University of Waterloo", city: "Waterloo, ON", note: "Co-op tech powerhouse" },
          { name: "University of British Columbia", city: "Vancouver, BC" },
          { name: "McGill University", city: "Montréal, QC" },
          { name: "University of Alberta", city: "Edmonton, AB" },
        ],
      },
      {
        field: "Business & Management",
        universities: [
          { name: "Ivey Business School — Western University", city: "London, ON" },
          { name: "Rotman School of Management — U of T", city: "Toronto, ON" },
          { name: "Schulich School of Business — York University", city: "Toronto, ON" },
          { name: "Sauder School of Business — UBC", city: "Vancouver, BC" },
          { name: "Smith School of Business — Queen's University", city: "Kingston, ON" },
        ],
      },
      {
        field: "Health Sciences & Medicine",
        universities: [
          { name: "McMaster University", city: "Hamilton, ON" },
          { name: "Université de Montréal", city: "Montréal, QC" },
          { name: "Dalhousie University", city: "Halifax, NS" },
          { name: "University of Calgary", city: "Calgary, AB" },
          { name: "University of Ottawa", city: "Ottawa, ON" },
        ],
      },
      {
        field: "Colleges & Diplomas (Pathway + PGWP)",
        universities: [
          { name: "Seneca Polytechnic", city: "Toronto, ON" },
          { name: "Humber College", city: "Toronto, ON" },
          { name: "George Brown College", city: "Toronto, ON" },
          { name: "Centennial College", city: "Toronto, ON" },
          { name: "Conestoga College", city: "Kitchener, ON" },
        ],
      },
    ],
  },
  {
    slug: "united-kingdom",
    name: "United Kingdom",
    image: uk,
    region: "Europe",
    blurb:
      "Globally respected degrees, 2-year Graduate Route visa and a vibrant multicultural student life.",
    highlights: ["Russell Group unis", "Graduate Route visa", "1-year Master's"],
    overview:
      "The UK offers world-renowned degrees with 1-year Master's programs and a 2-year post-study Graduate Route visa (3 years for PhD). Russell Group universities are research-intensive and highly ranked.",
    groups: [
      {
        field: "Engineering & Technology",
        universities: [
          { name: "Imperial College London", city: "London" },
          { name: "University of Cambridge", city: "Cambridge" },
          { name: "University of Manchester", city: "Manchester" },
          { name: "University of Sheffield", city: "Sheffield" },
          { name: "Loughborough University", city: "Loughborough" },
        ],
      },
      {
        field: "Business, Finance & Law",
        universities: [
          { name: "London School of Economics (LSE)", city: "London" },
          { name: "London Business School", city: "London" },
          { name: "Warwick Business School", city: "Coventry" },
          { name: "University of Edinburgh Business School", city: "Edinburgh" },
          { name: "King's College London", city: "London" },
        ],
      },
      {
        field: "Medicine & Health Sciences",
        universities: [
          { name: "University of Oxford", city: "Oxford" },
          { name: "University College London (UCL)", city: "London" },
          { name: "University of Glasgow", city: "Glasgow" },
          { name: "Queen Mary University of London", city: "London" },
          { name: "University of Birmingham", city: "Birmingham" },
        ],
      },
      {
        field: "Computing & Data Science",
        universities: [
          { name: "University of Bristol", city: "Bristol" },
          { name: "University of Leeds", city: "Leeds" },
          { name: "University of Southampton", city: "Southampton" },
          { name: "Queen's University Belfast", city: "Belfast" },
          { name: "Coventry University", city: "Coventry" },
        ],
      },
    ],
  },
  {
    slug: "united-states",
    name: "United States",
    image: usa,
    region: "North America",
    blurb:
      "Home to Ivy League and STEM powerhouses with strong scholarships and OPT/STEM-OPT work options.",
    highlights: ["Ivy League access", "STEM OPT 3 yrs", "Generous aid"],
    overview:
      "The USA hosts over 1 million international students across Ivy League, public flagships and liberal arts colleges. STEM grads enjoy 3-year OPT extensions, with strong scholarship and assistantship culture.",
    groups: [
      {
        field: "Engineering & Computer Science",
        universities: [
          { name: "Massachusetts Institute of Technology (MIT)", city: "Cambridge, MA" },
          { name: "Stanford University", city: "Stanford, CA" },
          { name: "Carnegie Mellon University", city: "Pittsburgh, PA" },
          { name: "Georgia Institute of Technology", city: "Atlanta, GA" },
          { name: "Purdue University", city: "West Lafayette, IN" },
        ],
      },
      {
        field: "Business & Finance",
        universities: [
          { name: "Wharton — University of Pennsylvania", city: "Philadelphia, PA" },
          { name: "Harvard Business School", city: "Boston, MA" },
          { name: "Stern — New York University", city: "New York, NY" },
          { name: "Ross — University of Michigan", city: "Ann Arbor, MI" },
          { name: "Kelley — Indiana University", city: "Bloomington, IN" },
        ],
      },
      {
        field: "Medicine, Nursing & Public Health",
        universities: [
          { name: "Johns Hopkins University", city: "Baltimore, MD" },
          { name: "Yale University", city: "New Haven, CT" },
          { name: "Duke University", city: "Durham, NC" },
          { name: "University of California, Los Angeles (UCLA)", city: "Los Angeles, CA" },
          { name: "Emory University", city: "Atlanta, GA" },
        ],
      },
      {
        field: "Liberal Arts, Media & Design",
        universities: [
          { name: "Columbia University", city: "New York, NY" },
          { name: "University of Southern California (USC)", city: "Los Angeles, CA" },
          { name: "Northwestern University", city: "Evanston, IL" },
          { name: "Parsons School of Design", city: "New York, NY" },
          { name: "Savannah College of Art and Design (SCAD)", city: "Savannah, GA" },
        ],
      },
    ],
  },
  {
    slug: "australia",
    name: "Australia",
    image: australia,
    region: "Oceania",
    blurb:
      "High quality of life, Group of Eight universities and post-study work rights of 2–4 years.",
    highlights: ["Group of Eight", "PSW 2–4 yrs", "Skilled migration"],
    overview:
      "Australia's Group of Eight (Go8) consistently rank in the global top 100. International graduates enjoy 2–4 year Temporary Graduate visas and clear skilled migration pathways.",
    groups: [
      {
        field: "Engineering & Mining",
        universities: [
          { name: "University of Melbourne", city: "Melbourne, VIC" },
          { name: "University of New South Wales (UNSW)", city: "Sydney, NSW" },
          { name: "University of Queensland", city: "Brisbane, QLD" },
          { name: "Curtin University", city: "Perth, WA", note: "Strong in mining" },
          { name: "RMIT University", city: "Melbourne, VIC" },
        ],
      },
      {
        field: "Business & Accounting",
        universities: [
          { name: "University of Sydney", city: "Sydney, NSW" },
          { name: "Monash University", city: "Melbourne, VIC" },
          { name: "Australian National University (ANU)", city: "Canberra, ACT" },
          { name: "University of Technology Sydney (UTS)", city: "Sydney, NSW" },
          { name: "Macquarie University", city: "Sydney, NSW" },
        ],
      },
      {
        field: "Health Sciences, Nursing & Medicine",
        universities: [
          { name: "University of Adelaide", city: "Adelaide, SA" },
          { name: "University of Western Australia", city: "Perth, WA" },
          { name: "Deakin University", city: "Geelong, VIC" },
          { name: "Griffith University", city: "Gold Coast, QLD" },
          { name: "La Trobe University", city: "Melbourne, VIC" },
        ],
      },
      {
        field: "Information Technology & Cyber",
        universities: [
          { name: "Queensland University of Technology (QUT)", city: "Brisbane, QLD" },
          { name: "University of Wollongong", city: "Wollongong, NSW" },
          { name: "Swinburne University of Technology", city: "Melbourne, VIC" },
          { name: "Edith Cowan University", city: "Perth, WA", note: "Cyber security" },
          { name: "James Cook University", city: "Townsville, QLD" },
        ],
      },
    ],
  },
  {
    slug: "germany",
    name: "Germany",
    image: germany,
    region: "Europe",
    blurb:
      "Tuition-free public universities, strong engineering programs and 18-month job-search visa.",
    highlights: ["Low/no tuition", "EU Blue Card", "Engineering hub"],
    overview:
      "Germany's public universities charge little or no tuition — even for international students. Graduates receive an 18-month job-seeker visa and qualify for the EU Blue Card in shortage occupations.",
    groups: [
      {
        field: "Engineering & Automotive",
        universities: [
          { name: "Technical University of Munich (TUM)", city: "Munich" },
          { name: "RWTH Aachen University", city: "Aachen" },
          { name: "Technische Universität Berlin", city: "Berlin" },
          { name: "Karlsruhe Institute of Technology (KIT)", city: "Karlsruhe" },
          { name: "TU Darmstadt", city: "Darmstadt" },
        ],
      },
      {
        field: "Business & Economics",
        universities: [
          { name: "University of Mannheim", city: "Mannheim" },
          { name: "Frankfurt School of Finance & Management", city: "Frankfurt" },
          { name: "WHU – Otto Beisheim School of Management", city: "Vallendar" },
          { name: "ESMT Berlin", city: "Berlin" },
          { name: "University of Cologne", city: "Cologne" },
        ],
      },
      {
        field: "Sciences, Medicine & Research",
        universities: [
          { name: "Heidelberg University", city: "Heidelberg" },
          { name: "LMU Munich", city: "Munich" },
          { name: "Humboldt University of Berlin", city: "Berlin" },
          { name: "University of Freiburg", city: "Freiburg" },
          { name: "University of Tübingen", city: "Tübingen" },
        ],
      },
      {
        field: "Applied Sciences (Hochschulen)",
        universities: [
          { name: "Hochschule München (Munich UAS)", city: "Munich" },
          { name: "HTW Berlin", city: "Berlin" },
          { name: "SRH Berlin University of Applied Sciences", city: "Berlin" },
          { name: "Hochschule Bremen", city: "Bremen" },
          { name: "IU International University", city: "Multiple campuses" },
        ],
      },
    ],
  },
  {
    slug: "ireland",
    name: "Ireland",
    image: ireland,
    region: "Europe",
    blurb:
      "English-speaking EU nation with thriving tech sector and 2-year stay-back for Master's grads.",
    highlights: ["Tech & pharma jobs", "2-yr stay back", "EU access"],
    overview:
      "Ireland hosts the European HQs of Google, Meta, Apple and Pfizer. Master's graduates enjoy a 2-year Stay Back option, with strong scholarship support from the Government of Ireland.",
    groups: [
      {
        field: "Technology & Computing",
        universities: [
          { name: "Trinity College Dublin", city: "Dublin" },
          { name: "University College Dublin (UCD)", city: "Dublin" },
          { name: "Dublin City University (DCU)", city: "Dublin" },
          { name: "University of Limerick", city: "Limerick" },
          { name: "Technological University Dublin (TU Dublin)", city: "Dublin" },
        ],
      },
      {
        field: "Business & Finance",
        universities: [
          { name: "UCD Smurfit Graduate Business School", city: "Dublin" },
          { name: "Trinity Business School", city: "Dublin" },
          { name: "DCU Business School", city: "Dublin" },
          { name: "National College of Ireland (NCI)", city: "Dublin" },
          { name: "Griffith College", city: "Dublin" },
        ],
      },
      {
        field: "Pharma, Medicine & Life Sciences",
        universities: [
          { name: "Royal College of Surgeons in Ireland (RCSI)", city: "Dublin" },
          { name: "University College Cork (UCC)", city: "Cork" },
          { name: "University of Galway", city: "Galway" },
          { name: "Maynooth University", city: "Maynooth" },
          { name: "Munster Technological University", city: "Cork" },
        ],
      },
    ],
  },
  {
    slug: "dubai",
    name: "Dubai (UAE)",
    image: dubai,
    region: "Middle East",
    blurb:
      "Tax-free careers, branch campuses of global universities and a regional business hub close to home.",
    highlights: ["Tax-free salaries", "Global campuses", "Golden Visa"],
    overview:
      "Dubai hosts 60+ universities including international branch campuses. Graduates can transition to tax-free employment and qualify for the UAE Golden Visa for top performers and skilled professionals.",
    groups: [
      {
        field: "Engineering & Technology",
        universities: [
          { name: "Khalifa University", city: "Abu Dhabi" },
          { name: "American University of Sharjah", city: "Sharjah" },
          { name: "Heriot-Watt University Dubai", city: "Dubai Knowledge Park" },
          { name: "BITS Pilani Dubai Campus", city: "Dubai" },
          { name: "Rochester Institute of Technology Dubai", city: "Dubai" },
        ],
      },
      {
        field: "Business & Hospitality",
        universities: [
          { name: "University of Wollongong in Dubai (UOWD)", city: "Dubai Knowledge Park" },
          { name: "Middlesex University Dubai", city: "Dubai Knowledge Park" },
          { name: "SP Jain School of Global Management", city: "Dubai" },
          { name: "Emirates Academy of Hospitality Management", city: "Dubai" },
          { name: "Hult International Business School Dubai", city: "Dubai" },
        ],
      },
      {
        field: "Medicine & Health Sciences",
        universities: [
          { name: "Mohammed Bin Rashid University of Medicine", city: "Dubai" },
          { name: "Gulf Medical University", city: "Ajman" },
          { name: "RAK Medical & Health Sciences University", city: "Ras Al Khaimah" },
          { name: "United Arab Emirates University", city: "Al Ain" },
          { name: "University of Sharjah", city: "Sharjah" },
        ],
      },
      {
        field: "Aviation, Media & Design",
        universities: [
          { name: "Emirates Aviation University", city: "Dubai" },
          { name: "Murdoch University Dubai", city: "Dubai Knowledge Park" },
          { name: "Curtin University Dubai", city: "Dubai International Academic City" },
          { name: "American University in Dubai", city: "Dubai" },
          { name: "Canadian University Dubai", city: "Dubai" },
        ],
      },
    ],
  },
  {
    slug: "malaysia",
    name: "Malaysia",
    image: malaysia,
    region: "Asia",
    blurb:
      "Affordable tuition, English-taught programs and twinning degrees with UK & Australian universities.",
    highlights: ["Low cost of living", "Twinning degrees", "Multicultural"],
    overview:
      "Malaysia offers affordable, English-taught degrees with twinning and dual-award options from UK and Australian universities. Living costs are among the lowest in Asia.",
    groups: [
      {
        field: "Engineering & Technology",
        universities: [
          { name: "Universiti Malaya (UM)", city: "Kuala Lumpur" },
          { name: "Universiti Teknologi Malaysia (UTM)", city: "Johor Bahru" },
          { name: "Universiti Tenaga Nasional (UNITEN)", city: "Kajang" },
          { name: "Universiti Sains Malaysia (USM)", city: "Penang" },
          { name: "Multimedia University (MMU)", city: "Cyberjaya" },
        ],
      },
      {
        field: "Business & Management",
        universities: [
          { name: "Sunway University", city: "Subang Jaya" },
          { name: "Taylor's University", city: "Subang Jaya" },
          { name: "Asia Pacific University (APU)", city: "Kuala Lumpur" },
          { name: "INTI International University", city: "Nilai" },
          { name: "HELP University", city: "Kuala Lumpur" },
        ],
      },
      {
        field: "Twinning / Branch Campuses",
        universities: [
          { name: "Monash University Malaysia", city: "Subang Jaya" },
          { name: "University of Nottingham Malaysia", city: "Semenyih" },
          { name: "Heriot-Watt University Malaysia", city: "Putrajaya" },
          { name: "University of Reading Malaysia", city: "Iskandar Puteri" },
          { name: "Xiamen University Malaysia", city: "Sepang" },
        ],
      },
      {
        field: "Medicine & Health Sciences",
        universities: [
          { name: "International Medical University (IMU)", city: "Kuala Lumpur" },
          { name: "MAHSA University", city: "Selangor" },
          { name: "Management & Science University (MSU)", city: "Shah Alam" },
          { name: "Universiti Putra Malaysia (UPM)", city: "Serdang" },
          { name: "UCSI University", city: "Kuala Lumpur" },
        ],
      },
    ],
  },
  {
    slug: "malta",
    name: "Malta",
    image: malta,
    region: "Europe",
    blurb:
      "EU member with English as an official language, growing tech & finance sector and Mediterranean lifestyle.",
    highlights: ["English-speaking EU", "Schengen access", "iGaming & finance"],
    overview:
      "Malta is an English-speaking EU member with a growing iGaming, fintech and maritime sector. Schengen access opens travel across Europe and graduates can transition to skilled work permits.",
    groups: [
      {
        field: "Business, Finance & iGaming",
        universities: [
          { name: "University of Malta — FEMA", city: "Msida" },
          { name: "American University of Malta", city: "Cospicua" },
          { name: "Global College Malta", city: "Sliema" },
          { name: "London School of Commerce Malta", city: "Sliema" },
          { name: "STC Higher Education", city: "Kalkara" },
        ],
      },
      {
        field: "IT, Engineering & Maritime",
        universities: [
          { name: "University of Malta — Faculty of ICT", city: "Msida" },
          { name: "MCAST (Malta College of Arts, Science & Technology)", city: "Paola" },
          { name: "Institute of Tourism Studies (ITS)", city: "Luqa" },
          { name: "Queen Mary University of London — Malta Campus", city: "Victoria, Gozo" },
          { name: "AUM — School of Engineering", city: "Cospicua" },
        ],
      },
      {
        field: "Health Sciences & Medicine",
        universities: [
          { name: "University of Malta — Medical School", city: "Msida" },
          { name: "Queen Mary University of London Medical School (Gozo)", city: "Victoria" },
          { name: "Barts and The London School of Medicine — Malta", city: "Gozo" },
          { name: "Idea Academy", city: "Tarxien" },
          { name: "Learnkey Institute", city: "Birkirkara" },
        ],
      },
    ],
  },
  {
    slug: "qatar",
    name: "Qatar",
    image: qatar,
    region: "Middle East",
    blurb:
      "Education City hosts top US & European university campuses with strong scholarships and tax-free careers.",
    highlights: ["Education City", "Top scholarships", "Tax-free income"],
    overview:
      "Qatar's Education City hosts branch campuses of leading US and European universities. Scholarships are generous and graduates step into a tax-free job market across energy, finance and aviation.",
    groups: [
      {
        field: "Engineering & Computer Science",
        universities: [
          { name: "Texas A&M University at Qatar", city: "Education City" },
          { name: "Carnegie Mellon University in Qatar", city: "Education City" },
          { name: "Qatar University — College of Engineering", city: "Doha" },
          { name: "Hamad Bin Khalifa University (HBKU)", city: "Education City" },
          { name: "University of Doha for Science and Technology", city: "Doha" },
        ],
      },
      {
        field: "Business, Foreign Service & Media",
        universities: [
          { name: "Georgetown University in Qatar", city: "Education City" },
          { name: "Northwestern University in Qatar", city: "Education City", note: "Journalism & Media" },
          { name: "HEC Paris in Qatar", city: "Education City" },
          { name: "Qatar University — College of Business", city: "Doha" },
          { name: "Stenden University Qatar", city: "Doha" },
        ],
      },
      {
        field: "Medicine, Health & Islamic Studies",
        universities: [
          { name: "Weill Cornell Medicine — Qatar", city: "Education City" },
          { name: "Qatar University — College of Medicine", city: "Doha" },
          { name: "College of the North Atlantic – Qatar", city: "Doha" },
          { name: "Virginia Commonwealth University in Qatar", city: "Education City", note: "Arts & Design" },
          { name: "Hamad Bin Khalifa University — Islamic Studies", city: "Education City" },
        ],
      },
    ],
  },
];

export const getDestination = (slug: string) =>
  destinations.find((d) => d.slug === slug);
