import { Card, CardHeader, CardFooter, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function TodoItem({ id, todoName, description, handleDelete, handleEdit }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{todoName}</CardTitle>
        <p>{description}</p>
      </CardHeader>
      <CardFooter>
        <Button
          className="mr-3"
          onClick={() => handleDelete(id)}  // Modalni ochish
          variant="destructive"
          type="button"
        >
          Delete
        </Button>
        <Button onClick={() => handleEdit(id)} variant="outline" type="button">
          Edit
        </Button>
      </CardFooter>
    </Card>
  );
}
