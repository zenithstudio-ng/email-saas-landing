"use client"

import * as React from "react"
import { useState } from "react"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CheckCircle, Search, MessageCircle, Mail } from "lucide-react"
import { generateThankYouEmailTemplate, sendEmail } from "@/lib/email"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ScrollArea } from "@/components/ui/scroll-area"
import { createClient } from '@supabase/supabase-js';


// Initialize Supabase client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
)

interface WaitlistDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

// Country codes list with country names
const countryCodes = [
  { id: 1, country: "Afghanistan", code: "+93" },
  { id: 2, country: "Albania", code: "+355" },
  { id: 3, country: "Algeria", code: "+213" },
  { id: 4, country: "Andorra", code: "+376" },
  { id: 5, country: "Angola", code: "+244" },
  { id: 6, country: "Antigua and Barbuda", code: "+1" },
  { id: 7, country: "Argentina", code: "+54" },
  { id: 8, country: "Armenia", code: "+374" },
  { id: 9, country: "Australia", code: "+61" },
  { id: 10, country: "Austria", code: "+43" },
  { id: 11, country: "Azerbaijan", code: "+994" },
  { id: 12, country: "Bahamas", code: "+1" },
  { id: 13, country: "Bahrain", code: "+973" },
  { id: 14, country: "Bangladesh", code: "+880" },
  { id: 15, country: "Barbados", code: "+1" },
  { id: 16, country: "Belarus", code: "+375" },
  { id: 17, country: "Belgium", code: "+32" },
  { id: 18, country: "Belize", code: "+501" },
  { id: 19, country: "Benin", code: "+229" },
  { id: 20, country: "Bhutan", code: "+975" },
  { id: 21, country: "Bolivia", code: "+591" },
  { id: 22, country: "Bosnia and Herzegovina", code: "+387" },
  { id: 23, country: "Botswana", code: "+267" },
  { id: 24, country: "Brazil", code: "+55" },
  { id: 25, country: "Brunei", code: "+673" },
  { id: 26, country: "Bulgaria", code: "+359" },
  { id: 27, country: "Burkina Faso", code: "+226" },
  { id: 28, country: "Burundi", code: "+257" },
  { id: 29, country: "Cambodia", code: "+855" },
  { id: 30, country: "Cameroon", code: "+237" },
  { id: 31, country: "Canada", code: "+1" },
  { id: 32, country: "Cape Verde", code: "+238" },
  { id: 33, country: "Central African Republic", code: "+236" },
  { id: 34, country: "Chad", code: "+235" },
  { id: 35, country: "Chile", code: "+56" },
  { id: 36, country: "China", code: "+86" },
  { id: 37, country: "Colombia", code: "+57" },
  { id: 38, country: "Comoros", code: "+269" },
  { id: 39, country: "Congo", code: "+242" },
  { id: 40, country: "Costa Rica", code: "+506" },
  { id: 41, country: "Croatia", code: "+385" },
  { id: 42, country: "Cuba", code: "+53" },
  { id: 43, country: "Cyprus", code: "+357" },
  { id: 44, country: "Czech Republic", code: "+420" },
  { id: 45, country: "Denmark", code: "+45" },
  { id: 46, country: "Djibouti", code: "+253" },
  { id: 47, country: "Dominica", code: "+1" },
  { id: 48, country: "Dominican Republic", code: "+1" },
  { id: 49, country: "East Timor", code: "+670" },
  { id: 50, country: "Ecuador", code: "+593" },
  { id: 51, country: "Egypt", code: "+20" },
  { id: 52, country: "El Salvador", code: "+503" },
  { id: 53, country: "Equatorial Guinea", code: "+240" },
  { id: 54, country: "Eritrea", code: "+291" },
  { id: 55, country: "Estonia", code: "+372" },
  { id: 56, country: "Ethiopia", code: "+251" },
  { id: 57, country: "Fiji", code: "+679" },
  { id: 58, country: "Finland", code: "+358" },
  { id: 59, country: "France", code: "+33" },
  { id: 60, country: "Gabon", code: "+241" },
  { id: 61, country: "Gambia", code: "+220" },
  { id: 62, country: "Georgia", code: "+995" },
  { id: 63, country: "Germany", code: "+49" },
  { id: 64, country: "Ghana", code: "+233" },
  { id: 65, country: "Greece", code: "+30" },
  { id: 66, country: "Grenada", code: "+1" },
  { id: 67, country: "Guatemala", code: "+502" },
  { id: 68, country: "Guinea", code: "+224" },
  { id: 69, country: "Guinea-Bissau", code: "+245" },
  { id: 70, country: "Guyana", code: "+592" },
  { id: 71, country: "Haiti", code: "+509" },
  { id: 72, country: "Honduras", code: "+504" },
  { id: 73, country: "Hungary", code: "+36" },
  { id: 74, country: "Iceland", code: "+354" },
  { id: 75, country: "India", code: "+91" },
  { id: 76, country: "Indonesia", code: "+62" },
  { id: 77, country: "Iran", code: "+98" },
  { id: 78, country: "Iraq", code: "+964" },
  { id: 79, country: "Ireland", code: "+353" },
  { id: 80, country: "Israel", code: "+972" },
  { id: 81, country: "Italy", code: "+39" },
  { id: 82, country: "Ivory Coast", code: "+225" },
  { id: 83, country: "Jamaica", code: "+1" },
  { id: 84, country: "Japan", code: "+81" },
  { id: 85, country: "Jordan", code: "+962" },
  { id: 86, country: "Kazakhstan", code: "+7" },
  { id: 87, country: "Kenya", code: "+254" },
  { id: 88, country: "Kiribati", code: "+686" },
  { id: 89, country: "Korea, North", code: "+850" },
  { id: 90, country: "Korea, South", code: "+82" },
  { id: 91, country: "Kuwait", code: "+965" },
  { id: 92, country: "Kyrgyzstan", code: "+996" },
  { id: 93, country: "Laos", code: "+856" },
  { id: 94, country: "Latvia", code: "+371" },
  { id: 95, country: "Lebanon", code: "+961" },
  { id: 96, country: "Lesotho", code: "+266" },
  { id: 97, country: "Liberia", code: "+231" },
  { id: 98, country: "Libya", code: "+218" },
  { id: 99, country: "Liechtenstein", code: "+423" },
  { id: 100, country: "Lithuania", code: "+370" },
  { id: 101, country: "Luxembourg", code: "+352" },
  { id: 102, country: "Macedonia", code: "+389" },
  { id: 103, country: "Madagascar", code: "+261" },
  { id: 104, country: "Malawi", code: "+265" },
  { id: 105, country: "Malaysia", code: "+60" },
  { id: 106, country: "Maldives", code: "+960" },
  { id: 107, country: "Mali", code: "+223" },
  { id: 108, country: "Malta", code: "+356" },
  { id: 109, country: "Marshall Islands", code: "+692" },
  { id: 110, country: "Mauritania", code: "+222" },
  { id: 111, country: "Mauritius", code: "+230" },
  { id: 112, country: "Mexico", code: "+52" },
  { id: 113, country: "Micronesia", code: "+691" },
  { id: 114, country: "Moldova", code: "+373" },
  { id: 115, country: "Monaco", code: "+377" },
  { id: 116, country: "Mongolia", code: "+976" },
  { id: 117, country: "Montenegro", code: "+382" },
  { id: 118, country: "Morocco", code: "+212" },
  { id: 119, country: "Mozambique", code: "+258" },
  { id: 120, country: "Myanmar", code: "+95" },
  { id: 121, country: "Namibia", code: "+264" },
  { id: 122, country: "Nauru", code: "+674" },
  { id: 123, country: "Nepal", code: "+977" },
  { id: 124, country: "Netherlands", code: "+31" },
  { id: 125, country: "New Zealand", code: "+64" },
  { id: 126, country: "Nicaragua", code: "+505" },
  { id: 127, country: "Niger", code: "+227" },
  { id: 128, country: "Nigeria", code: "+234" },
  { id: 129, country: "Norway", code: "+47" },
  { id: 130, country: "Oman", code: "+968" },
  { id: 131, country: "Pakistan", code: "+92" },
  { id: 132, country: "Palau", code: "+680" },
  { id: 133, country: "Panama", code: "+507" },
  { id: 134, country: "Papua New Guinea", code: "+675" },
  { id: 135, country: "Paraguay", code: "+595" },
  { id: 136, country: "Peru", code: "+51" },
  { id: 137, country: "Philippines", code: "+63" },
  { id: 138, country: "Poland", code: "+48" },
  { id: 139, country: "Portugal", code: "+351" },
  { id: 140, country: "Qatar", code: "+974" },
  { id: 141, country: "Romania", code: "+40" },
  { id: 142, country: "Russia", code: "+7" },
  { id: 143, country: "Rwanda", code: "+250" },
  { id: 144, country: "Saint Kitts and Nevis", code: "+1" },
  { id: 145, country: "Saint Lucia", code: "+1" },
  { id: 146, country: "Saint Vincent", code: "+1" },
  { id: 147, country: "Samoa", code: "+685" },
  { id: 148, country: "San Marino", code: "+378" },
  { id: 149, country: "Sao Tome and Principe", code: "+239" },
  { id: 150, country: "Saudi Arabia", code: "+966" },
  { id: 151, country: "Senegal", code: "+221" },
  { id: 152, country: "Serbia", code: "+381" },
  { id: 153, country: "Seychelles", code: "+248" },
  { id: 154, country: "Sierra Leone", code: "+232" },
  { id: 155, country: "Singapore", code: "+65" },
  { id: 156, country: "Slovakia", code: "+421" },
  { id: 157, country: "Slovenia", code: "+386" },
  { id: 158, country: "Solomon Islands", code: "+677" },
  { id: 159, country: "Somalia", code: "+252" },
  { id: 160, country: "South Africa", code: "+27" },
  { id: 161, country: "South Sudan", code: "+211" },
  { id: 162, country: "Spain", code: "+34" },
  { id: 163, country: "Sri Lanka", code: "+94" },
  { id: 164, country: "Sudan", code: "+249" },
  { id: 165, country: "Suriname", code: "+597" },
  { id: 166, country: "Swaziland", code: "+268" },
  { id: 167, country: "Sweden", code: "+46" },
  { id: 168, country: "Switzerland", code: "+41" },
  { id: 169, country: "Syria", code: "+963" },
  { id: 170, country: "Taiwan", code: "+886" },
  { id: 171, country: "Tajikistan", code: "+992" },
  { id: 172, country: "Tanzania", code: "+255" },
  { id: 173, country: "Thailand", code: "+66" },
  { id: 174, country: "Togo", code: "+228" },
  { id: 175, country: "Tonga", code: "+676" },
  { id: 176, country: "Trinidad and Tobago", code: "+1" },
  { id: 177, country: "Tunisia", code: "+216" },
  { id: 178, country: "Turkey", code: "+90" },
  { id: 179, country: "Turkmenistan", code: "+993" },
  { id: 180, country: "Tuvalu", code: "+688" },
  { id: 181, country: "Uganda", code: "+256" },
  { id: 182, country: "Ukraine", code: "+380" },
  { id: 183, country: "United Arab Emirates", code: "+971" },
  { id: 184, country: "United Kingdom", code: "+44" },
  { id: 185, country: "United States", code: "+1" },
  { id: 186, country: "Uruguay", code: "+598" },
  { id: 187, country: "Uzbekistan", code: "+998" },
  { id: 188, country: "Vanuatu", code: "+678" },
  { id: 189, country: "Vatican City", code: "+379" },
  { id: 190, country: "Venezuela", code: "+58" },
  { id: 191, country: "Vietnam", code: "+84" },
  { id: 192, country: "Yemen", code: "+967" },
  { id: 193, country: "Zambia", code: "+260" },
  { id: 194, country: "Zimbabwe", code: "+263" }
];

export function WaitlistDialog({ open, onOpenChange }: WaitlistDialogProps) {
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [countryCode, setCountryCode] = useState("+1")
  const [countrySearch, setCountrySearch] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  
  // Filter country codes based on search
  const filteredCountryCodes = countryCodes.filter(country => 
    country.country.toLowerCase().includes(countrySearch.toLowerCase()) || 
    country.code.includes(countrySearch)
  )
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!fullName || !email || !phoneNumber) return
    
    setLoading(true)
    setError(null)

    try {
      // Check if email already exists in the waitlist
      const { data: existingEmails } = await supabase
        .from('waitlist')
        .select('email')
        .eq('email', email)
        .limit(1)
      
      // If email already exists, show error message
      if (existingEmails && existingEmails.length > 0) {
        setError('This email has already been registered. Thank you for your interest!')
        setLoading(false)
        return
      }
      
      // Insert data into Supabase
      const { error } = await supabase
        .from('waitlist')
        .insert([
          { 
            full_name: fullName,
            email: email,
            phone_number: `${countryCode}${phoneNumber}`,
            country_code: countryCode,
            created_at: new Date().toISOString()
          }
        ])

      if (error) throw error

      // Send thank you email using EmailJS
      try {
        const whatsappLink = "https://chat.whatsapp.com/GjPAB4kUxRg9WBLINTFbuj?mode=ems_copy_c";
        const emailTemplate = generateThankYouEmailTemplate(fullName, whatsappLink);
        await sendEmail({
          to: email,
          subject: "Welcome to TheXone Waitlist!",
          html: emailTemplate
        });
        console.log(`Thank you email sent to ${email} using EmailJS`);
      } catch (emailError) {
        console.error("Failed to send thank you email with EmailJS:", emailError);
        // Continue with success flow even if email fails
      }

      setSubmitted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred while joining the waitlist')
    } finally {
      setLoading(false)
    }
  }
  
  const resetForm = () => {
    setFullName("")
    setEmail("")
    setPhoneNumber("")
    setCountryCode("+1")
    setSubmitted(false)
    setError(null)
  }
  
  const handleOpenChange = (open: boolean) => {
    if (!open) {
      setTimeout(() => {
        resetForm()
      }, 300)
    }
    onOpenChange(open)
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="sm:max-w-md">
        {!submitted ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-xl">Join our waitlist</DialogTitle>
              <DialogDescription>
                Be the first to know when we launch. Get early access to our AI-powered email platform.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4 py-4">
              {error && (
                <div className="p-3 text-sm text-red-500 bg-red-50 border border-red-200 rounded-md">
                  {error}
                </div>
              )}
              <div className="space-y-2">
                <Label htmlFor="fullName">Full Name</Label>
                <Input
                  id="fullName"
                  type="text"
                  placeholder="John Doe"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phoneNumber">Phone Number</Label>
                <div className="flex space-x-2">
                  <div className="w-24">
                    <Select value={countryCode} onValueChange={setCountryCode}>
                      <SelectTrigger>
                        <SelectValue>
                          {countryCodes.find(c => c.code === countryCode)?.code || "+1"}
                        </SelectValue>
                      </SelectTrigger>
                      <SelectContent>
                        <div className="flex items-center px-3 pb-2">
                          <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
                          <Input
                            placeholder="Search country..."
                            className="h-8"
                            value={countrySearch}
                            onChange={(e) => setCountrySearch(e.target.value)}
                          />
                        </div>
                        <ScrollArea className="h-72">
                          <div className="p-1">
                            {filteredCountryCodes.map((country) => (
                              <SelectItem key={country.id} value={country.code} className="cursor-pointer">
                                <span className="flex items-center">
                                  <span className="font-medium">{country.code}</span>
                                  <span className="ml-2 text-muted-foreground">{country.country}</span>
                                </span>
                              </SelectItem>
                            ))}
                          </div>
                        </ScrollArea>
                      </SelectContent>
                    </Select>
                  </div>
                  <Input
                    id="phoneNumber"
                    type="tel"
                    placeholder="123-456-7890"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                    className="flex-1"
                  />
                </div>
              </div>
              <DialogFooter className="pt-4">
                <Button type="submit" disabled={loading} className="w-full">
                  {loading ? "Submitting..." : "Join Waitlist"}
                </Button>
              </DialogFooter>
            </form>
          </>
        ) : (
          <div className="py-6 flex flex-col items-center justify-center text-center space-y-4">
            <div className="rounded-full bg-emerald-100 p-3">
              <CheckCircle className="h-8 w-8 text-emerald-600" />
            </div>
            <DialogTitle className="text-xl">Welcome to TheXone!</DialogTitle>
            <DialogDescription className="flex flex-col items-center space-y-2">
              <p>Thank you for joining our waitlist.</p>
              <div className="flex items-center text-emerald-600">
                <Mail className="h-4 w-4 mr-1" />
                <span>We've sent a confirmation email to your inbox</span>
              </div>
            </DialogDescription>
            
            <div className="mt-4 space-y-4 w-full">
              <div className="border border-emerald-200 rounded-lg p-4 bg-emerald-50">
                <h3 className="font-medium text-emerald-700 mb-2 flex items-center">
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Join our TheXone Community
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Connect with other early adopters and get exclusive updates about TheXone.
                </p>
                <a 
                  href="https://chat.whatsapp.com/GjPAB4kUxRg9WBLINTFbuj?mode=ems_copy_c" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button 
                    className="w-full bg-green-600 hover:bg-green-700 text-white" 
                    variant="outline"
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Join TheXone WhatsApp Group
                  </Button>
                </a>
              </div>
              
              <Button
                variant="outline"
                onClick={() => onOpenChange(false)}
                className="w-full"
              >
                Close
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}