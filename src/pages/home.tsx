import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Database, 
  Lock, 
  History, 
  Zap, 
  Search, 
  ShieldCheck, 
  Plug, 
  Settings, 
  RefreshCw,
  Fingerprint,
  CalendarCheck,
  Tag,
  Rocket,
  PlayCircle,
  CheckCircle,
  ExternalLink,
  UserPlus,
  Code,
  Github,
  Clock,
  AlertTriangle,
  Puzzle,
  Menu,
  X
} from "lucide-react";
import { useState, useEffect } from "react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <span className="text-2xl font-bold trust-blue">DeDi</span>
                <span className="text-sm text-gray-600 ml-2">Decentralized Directory</span>
              </div>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <button 
                  onClick={() => scrollToSection('features')} 
                  className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
                >
                  Features
                </button>
                <button 
                  onClick={() => scrollToSection('solution')} 
                  className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
                >
                  Solution
                </button>
                <button 
                  onClick={() => scrollToSection('partners')} 
                  className="text-gray-700 hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
                >
                  Partners
                </button>
                <Button asChild className="bg-trust-blue hover:bg-blue-700">
                  <a href="https://publish.dedi.global" target="_blank" rel="noopener">
                    Get Started
                  </a>
                </Button>
              </div>
            </div>

            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-gray-200">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <button 
                  onClick={() => scrollToSection('features')} 
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary"
                >
                  Features
                </button>
                <button 
                  onClick={() => scrollToSection('solution')} 
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary"
                >
                  Solution
                </button>
                <button 
                  onClick={() => scrollToSection('partners')} 
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-primary"
                >
                  Partners
                </button>
                <Button asChild className="w-full mt-2 bg-trust-blue hover:bg-blue-700">
                  <a href="https://publish.dedi.global" target="_blank" rel="noopener">
                    Get Started
                  </a>
                </Button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className={`relative bg-white overflow-hidden transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 opacity-60"></div>
        <div 
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `url("data:image/svg+xml,<svg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'><g fill='none' fill-rule='evenodd'><g fill='%23E3F2FD' fill-opacity='0.3'><circle cx='5' cy='5' r='2'/><circle cx='25' cy='5' r='2'/><circle cx='45' cy='5' r='2'/><circle cx='15' cy='25' r='2'/><circle cx='35' cy='25' r='2'/><circle cx='55' cy='25' r='2'/><circle cx='5' cy='45' r='2'/><circle cx='25' cy='45' r='2'/><circle cx='45' cy='45' r='2'/></g></g></svg>")`
          }}
        ></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6">
                <Badge className="inline-flex items-center px-3 py-1 bg-blue-100 text-primary hover:bg-blue-200">
                  <Shield className="w-4 h-4 mr-2" />
                  Cryptographically-Powered Trust Infrastructure
                </Badge>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                Enhancing Trust in 
                <span className="trust-blue"> Digital Transactions</span>
              </h1>
              
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                DeDi solves costly verification problems by creating a universal way to verify public information instantly. Transform fragmented registries into AI-ready directories with cryptographic guarantees.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-trust-blue hover:bg-blue-700 shadow-lg hover:shadow-xl">
                  <a href="https://publish.dedi.global" target="_blank" rel="noopener">
                    <Rocket className="w-5 h-5 mr-2" />
                    Get Started Now
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  onClick={() => scrollToSection('solution')}
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-white"
                >
                  <PlayCircle className="w-5 h-5 mr-2" />
                  Learn More
                </Button>
              </div>
              
              <div className="mt-8 flex items-center text-sm text-gray-500">
                <CheckCircle className="w-4 h-4 text-success-green mr-2" />
                Open source protocol • Enterprise ready • Population scale
              </div>
            </div>
            
            <div className="lg:pl-8">
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-2xl flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
                  <div className="relative z-10 text-center text-white">
                    <Shield className="w-24 h-24 mx-auto mb-4 opacity-90" />
                    <div className="text-2xl font-bold mb-2">DeDi Protocol</div>
                    <div className="text-lg opacity-90">Trust Infrastructure</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">The Problem: Slow, Expensive Verification</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">High cost of establishing trust in digital transactions</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gray-800 border-gray-700 text-white">
              <CardContent className="text-center p-8">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Inefficient Processes</h3>
                <p className="text-gray-300">Organizations spend excessive time and resources manually searching for and verifying critical information, leading to higher costs.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800 border-gray-700 text-white">
              <CardContent className="text-center p-8">
                <div className="w-16 h-16 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <AlertTriangle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Risk of Bad Decisions</h3>
                <p className="text-gray-300">Delayed or outdated information can lead to wrong decisions, exposing businesses to fraud and security risks.</p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800 border-gray-700 text-white">
              <CardContent className="text-center p-8">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Puzzle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Difficult Integrations</h3>
                <p className="text-gray-300">Inconsistent interfaces make it hard to connect with multiple registries, adding integration costs and delays.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="relative">
                <div className="w-full h-80 bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl shadow-xl flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,<svg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'><g fill='%23374151' fill-opacity='0.3'><path d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/></g></svg>")`,
                    backgroundSize: '40px 40px'
                  }}></div>
                  <div className="relative z-10 text-center text-white">
                    <Database className="w-20 h-20 mx-auto mb-4 opacity-90" />
                    <div className="text-xl font-bold mb-2">Universal API</div>
                    <div className="text-sm opacity-90">Standardized Access</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                Decentralized Directory Protocol
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Universal way to discover & verify public information through standardized, machine-readable APIs with cryptographic guarantees.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-trust-blue rounded-lg flex items-center justify-center">
                    <Database className="w-6 h-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Machine-Readable APIs</h3>
                    <p className="text-gray-600">Standardized, programmable access for instant data retrieval and verification.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-trust-blue rounded-lg flex items-center justify-center">
                    <Lock className="w-6 h-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Cryptographic Tamper-Resistance</h3>
                    <p className="text-gray-600">Immutable, verifiable records with blockchain-level security guarantees.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-trust-blue rounded-lg flex items-center justify-center">
                    <History className="w-6 h-6 text-white" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Provenance Tracking</h3>
                    <p className="text-gray-600">Complete audit trails with recorded authorship and change history.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Business Value Delivered</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Transform your verification processes with enterprise-grade trust infrastructure</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-trust-blue rounded-xl flex items-center justify-center mb-6">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Instantly Access Reliable Information</h3>
                <p className="text-gray-600">Make faster, more accurate business decisions with confidence through real-time data access.</p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-success-green rounded-xl flex items-center justify-center mb-6">
                  <Search className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Know Source & History</h3>
                <p className="text-gray-600">Simplify compliance and increase transparency with complete provenance tracking.</p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-purple-600 rounded-xl flex items-center justify-center mb-6">
                  <ShieldCheck className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Trust Your Data</h3>
                <p className="text-gray-600">Strengthen security and customer trust with cryptographic verification.</p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent-blue rounded-xl flex items-center justify-center mb-6">
                  <Plug className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Public, Interoperable Interfaces</h3>
                <p className="text-gray-600">Improve efficiency with uniform, open access across all systems.</p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-cta-orange rounded-xl flex items-center justify-center mb-6">
                  <Settings className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Minimize Costs</h3>
                <p className="text-gray-600">Future-proof operations with seamless integration and modular architecture.</p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-indigo-600 rounded-xl flex items-center justify-center mb-6">
                  <RefreshCw className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Live Sync & Updates</h3>
                <p className="text-gray-600">Always make decisions based on the latest information with real-time updates.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* dedi.global Platform */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              dedi.global – Ready to Use Solution
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              A hosted platform by the Network for Humanity Foundation, enabling registrars to effortlessly publish and manage directories on robust decentralized infrastructure.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-success-green mr-3" />
                <span className="text-gray-700">Ledger governance for automated scalability</span>
              </div>
              <div className="flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-success-green mr-3" />
                <span className="text-gray-700">Enhanced trust with cryptographic guarantees</span>
              </div>
              <div className="flex items-center justify-center">
                <CheckCircle className="w-5 h-5 text-success-green mr-3" />
                <span className="text-gray-700">Compatible with existing systems and technologies</span>
              </div>
            </div>
            
            <Button asChild size="lg" className="bg-trust-blue hover:bg-blue-700 shadow-lg">
              <a href="https://publish.dedi.global" target="_blank" rel="noopener">
                <ExternalLink className="w-5 h-5 mr-2" />
                Access dedi.global
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Three Pillars of Trust */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Three Pillars of Digital Trust</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Establishing trust through integrity, validity, and authenticity verification</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-trust-blue rounded-full flex items-center justify-center mx-auto mb-6">
                  <Fingerprint className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Integrity</h3>
                <p className="text-gray-600 mb-4"><strong>No changes.</strong> The data matches the original exactly.</p>
                <p className="text-sm text-gray-500">Verified using digital signatures and cryptographic hash functions to detect any tampering.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-success-green rounded-full flex items-center justify-center mx-auto mb-6">
                  <CalendarCheck className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Validity</h3>
                <p className="text-gray-600 mb-4"><strong>Still good.</strong> Information hasn't expired or been canceled.</p>
                <p className="text-sm text-gray-500">Checked against revocation lists, expiration dates, and updated versions.</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Tag className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Authenticity</h3>
                <p className="text-gray-600 mb-4"><strong>Real source.</strong> Information comes from who it claims to come from.</p>
                <p className="text-sm text-gray-500">Verified through digital signatures and trusted certificate authorities.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Our Ecosystem</h2>
            <p className="text-xl text-gray-600">Building the future of trust infrastructure together</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Sponsor */}
            <Card className="bg-gray-50 hover:shadow-lg transition-shadow">
              <CardContent className="text-center p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Sponsored by</h3>
                <a href="https://finternetlab.io/" className="inline-block hover:opacity-80 transition-opacity" target="_blank" rel="noopener">
                  <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="text-2xl font-bold trust-blue mb-2">Finternet Labs</div>
                      <p className="text-sm text-gray-600">Empowering every Individual and Business</p>
                    </CardContent>
                  </Card>
                </a>
                <p className="text-sm text-gray-500 mt-4">Building interconnected financial ecosystems for 8+ billion individuals and 300+ million businesses</p>
              </CardContent>
            </Card>
            
            {/* Partner */}
            <Card className="bg-gray-50 hover:shadow-lg transition-shadow">
              <CardContent className="text-center p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Technology Partner</h3>
                <a href="https://dhiway.com" className="inline-block hover:opacity-80 transition-opacity" target="_blank" rel="noopener">
                  <Card className="bg-white shadow-md hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="text-2xl font-bold mb-2" style="text-color:0x">Dhiway</div>
                      <p className="text-sm text-gray-600">Reshaping the digital future</p>
                    </CardContent>
                  </Card>
                </a>
                <p className="text-sm text-gray-500 mt-4">Creating decentralised trust networks for consent-based data exchange with CORD Network</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-trust-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Verification Process?
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
            Join the decentralized trust revolution. Start building secure, verifiable, and interoperable directory systems today.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="text-center text-white">
              <div className="w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <UserPlus className="w-8 h-8" />
              </div>
              <h3 className="font-semibold mb-2">Claim Your Namespace</h3>
              <p className="text-sm text-blue-100">Register your organization on dedi.global</p>
            </div>
            
            <div className="text-center text-white">
              <div className="w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Plug className="w-8 h-8" />
              </div>
              <h3 className="font-semibold mb-2">Adopt the Protocol</h3>
              <p className="text-sm text-blue-100">Connect your verification systems</p>
            </div>
            
            <div className="text-center text-white">
              <div className="w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8" />
              </div>
              <h3 className="font-semibold mb-2">Implement DeDi APIs</h3>
              <p className="text-sm text-blue-100">Make your registries accessible</p>
            </div>
          </div>
          
          <Button asChild variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-primary shadow-lg">
            <a href="https://publish.dedi.global" target="_blank" rel="noopener">
              <Rocket className="w-5 h-5 mr-2" />
              Start Building on DeDi
            </a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center mb-4">
                <span className="text-2xl font-bold text-white">DeDi</span>
                <span className="text-sm text-gray-400 ml-2">Decentralized Directory</span>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                Open protocol for enhancing trust in digital transactions through universal, standardized API specifications for accessing public registries.
              </p>
              <div className="flex space-x-4">
                <a href="https://github.com/finternet-io/dedi" className="text-gray-400 hover:text-white transition-colors" target="_blank" rel="noopener">
                  <Github className="w-6 h-6" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="https://github.com/finternet-io/dedi" className="hover:text-white transition-colors" target="_blank" rel="noopener">
                    GitHub Repository
                  </a>
                </li>
                <li>
                  <a href="https://publish.dedi.global" className="hover:text-white transition-colors" target="_blank" rel="noopener">
                    dedi.global Platform
                  </a>
                </li>
                <li>
                  <button onClick={() => scrollToSection('features')} className="hover:text-white transition-colors">
                    API Documentation
                  </button>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Partners</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="https://finternetlab.io/" className="hover:text-white transition-colors" target="_blank" rel="noopener">
                    Finternet Labs
                  </a>
                </li>
                <li>
                  <a href="https://dhiway.com" className="hover:text-white transition-colors" target="_blank" rel="noopener">
                    Dhiway
                  </a>
                </li>
                <li>
                  <a href="https://cord.network/" className="hover:text-white transition-colors" target="_blank" rel="noopener">
                    CORD Network
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 DeDi - Decentralized Directory Protocol. Open source initiative for enhancing digital trust.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
