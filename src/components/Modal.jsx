import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardFooter } from "@/components/ui/card";

const Modal = ({ isOpen, onClose, onConfirm, message }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
      <Card className="w-[400px]">
        <CardHeader>
          <h2 className="text-lg font-semibold">Tasdiqlash</h2>
        </CardHeader>
        <div className="p-5">
          <p>{message}</p>
        </div>
        <CardFooter className="flex justify-end gap-2">
          <Button
            variant="destructive"
            onClick={() => {
              onConfirm();
              onClose();
            }}
          >
            Ha
          </Button>
          <Button variant="outline" onClick={onClose}>
            Yo'q
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Modal;
