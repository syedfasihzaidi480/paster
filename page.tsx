"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Copy, Github, Mail } from "lucide-react"

export default function PasterClone() {
  const [currentPage, setCurrentPage] = useState<"main" | "auth">("main")
  const [pasteContent, setPasteContent] = useState("")
  const [generatedLink, setGeneratedLink] = useState("")

  const handlePaste = () => {
    const randomId = Math.random().toString(36).substring(7)
    setGeneratedLink(`https://paster.so/${randomId}`)
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedLink)
  }

  const MainPage = () => (
    <Card className="w-full max-w-2xl mx-auto bg-white">
      <CardHeader>
        <CardTitle>Paster Clone</CardTitle>
        <CardDescription>Create and share text snippets quickly</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="paste-content">Your text</Label>
          <Textarea
            id="paste-content"
            placeholder="Type or paste your content here..."
            value={pasteContent}
            onChange={(e) => setPasteContent(e.target.value)}
            rows={10}
          />
        </div>
        <Button onClick={handlePaste} className="w-full">
          Create Paste
        </Button>
        {generatedLink && (
          <div className="space-y-2">
            <Label htmlFor="generated-link">Generated Link</Label>
            <div className="flex space-x-2">
              <Input
                id="generated-link"
                value={generatedLink}
                readOnly
                className="flex-grow"
              />
              <Button variant="outline" size="icon" onClick={handleCopy}>
                <Copy className="h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter>
        <p className="text-sm text-muted-foreground">
          Paste your text, click "Create Paste", and share the generated link.
        </p>
      </CardFooter>
    </Card>
  )

  const AuthPage = () => (
    <Card className="w-full max-w-md mx-auto bg-white">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold">Sign in</CardTitle>
        <CardDescription>Choose your preferred sign in method</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Button className="w-full" variant="outline">
          <svg
            className="mr-2 h-4 w-4"
            aria-hidden="true"
            focusable="false"
            data-prefix="fab"
            data-icon="google"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 488 512"
          >
            <path
              fill="currentColor"
              d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
            ></path>
          </svg>
          Sign in with Google
        </Button>
        <Button className="w-full" variant="outline">
          <Github className="mr-2 h-4 w-4" />
          Sign in with GitHub
        </Button>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">
          <Mail className="mr-2 h-4 w-4" /> Sign in with Email
        </Button>
      </CardFooter>
    </Card>
  )

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#ac32e4] via-[#7918f2] to-[#4801ff]">
      <header className="py-6 px-4 bg-white bg-opacity-10">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6 text-white"
            >
              <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" />
              <rect x="9" y="3" width="6" height="4" rx="2" />
              <path d="M9 12h6" />
              <path d="M9 16h6" />
            </svg>
            <span className="font-bold text-xl text-white">Paster</span>
          </div>
          <div className="space-x-2">
            <Button
              variant="ghost"
              onClick={() => setCurrentPage("main")}
              className="text-white hover:text-white hover:bg-white hover:bg-opacity-20"
            >
              Home
            </Button>
            <Button
              variant="ghost"
              onClick={() => setCurrentPage("auth")}
              className="text-white hover:text-white hover:bg-white hover:bg-opacity-20"
            >
              Sign In
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center px-4 py-12">
        {currentPage === "main" ? <MainPage /> : <AuthPage />}
      </main>

      <footer className="py-6 px-4 bg-white bg-opacity-10">
        <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center text-sm text-white">
          <div className="mb-4 sm:mb-0">© 2023 Paster. All rights reserved.</div>
          <div className="flex space-x-4">
            <a href="#" className="hover:underline">Terms</a>
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}