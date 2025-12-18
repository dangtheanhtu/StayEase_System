import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus } from "lucide-react";

export default function StaffManagementPage() {
  return (
    <div className="container mx-auto p-6">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-3xl font-bold">Staff Management</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Staff
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Staff Members</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-8 text-muted-foreground">
            No staff members found. Click "Add Staff" to get started.
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
