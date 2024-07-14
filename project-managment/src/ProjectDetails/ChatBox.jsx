import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { PaperPlaneIcon } from "@radix-ui/react-icons";

function ChatBox() {
    const [message, setMessage] = useState("");
    
    const handleSendMessage = () => {
        console.log("message", message);
    };

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    return (
        <div className="sticky">
            <div className="border border-rose-700 rounded-lg bg-rose-dark-50">
                <h1 className="border-b border-rose-700 p-5 text-rose-200">Group Discussion</h1>
                
                <ScrollArea className="h-[25rem] w-full p-5 flex gap-3 flex-col">
                    {[1, 1, 1, 1].map((item, index) => (
                        index % 2 === 0 ? (
                            <div className="flex gap-2 mb-2 justify-start" key={index}>
                                <Avatar>
                                    <AvatarFallback className="bg-rose-600 text-rose-50">K</AvatarFallback>
                                </Avatar>
                                <div className="space-y-2 py-2 px-5 border border-rose-700 bg-rose-dark-100 rounded-ss-2xl rounded-e-xl">
                                    <p className="text-rose-200">Karan</p>
                                    <p className="text-blue-300">How are you?</p>
                                </div>
                            </div>
                        ) : (
                            <div className="flex gap-2 mb-2 justify-end" key={index}>
                                <div className="space-y-2 py-2 px-5 border border-rose-700 bg-rose-dark-100 rounded-se-2xl rounded-s-xl">
                                    <p className="text-rose-200">Ayush</p>
                                    <p className="text-green-400">I am Good. What's about you?</p>
                                </div>
                                <Avatar>
                                    <AvatarFallback className="bg-rose-600 text-rose-50">A</AvatarFallback>
                                </Avatar>
                            </div>
                        )
                    ))}
                </ScrollArea>
                
                <div className="relative p-0">
                    <Input
                        placeholder="Type a message..."
                        className="py-7 border-t border-rose-700 outline-none focus:outline-none focus:ring-0 rounded-none border-b-0 border-x-0 bg-rose-dark-50 text-gray-700"
                        value={message}
                        onChange={handleMessageChange}
                    />
                    <Button onClick={handleSendMessage} className="absolute right-2 top-3 rounded-full bg-rose-600 text-rose-50" size="icon" variant="ghost">
                        <PaperPlaneIcon />
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default ChatBox;
