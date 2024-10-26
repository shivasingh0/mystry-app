import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@react-email/components";
import { X } from "lucide-react";
import { Message } from "@/model/User";
import { useToast } from "@/hooks/use-toast";
import axios from "axios";
import { ApiResponse } from "@/types/ApiResponse";

type MessageCardProps = {
  message: Message;
  onMessageDelete: () => void;
}

const MessageCard = ({message, onMessageDelete}: MessageCardProps) => {
    const {toast} = useToast();

    const handleDeleteConfirm = async () => {
        try {
           const response = await axios.delete<ApiResponse>(`/api/delete-message/${message._id}`)
           toast({
            title: response.data.message,
           })
           onMessageDelete(message._id);
            
        } catch (error) {
            
        }
        
    }

    const convertISOToNormalDate = (isoDate) => {
      const date = new Date(isoDate);
      // Specify the options for formatting
      const options = {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
      };
      // Convert the date to a readable format
      return date.toLocaleString(undefined, options);
  }

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-center">
        <CardTitle>{message.content}</CardTitle>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button className="border hover:scale-105 transition-all bg-red-500 text-white font-bold border-red-500 rounded-md cursor-pointer px-4" variant="destructive">
                <X />
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                account and remove your data from our servers.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={handleDeleteConfirm} >Continue</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
        </div>
      </CardHeader>
      <CardFooter>
        <p>{convertISOToNormalDate(message.createdAt)}</p>
      </CardFooter>
    </Card>
  );
};

export default MessageCard;
