import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus } from "lucide-react";

export default function ServiceRequestsPage() {
  return (
    <div className="container mx-auto p-6">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Service Requests</h1>
          <p className="text-muted-foreground mt-2">
            Submit and track maintenance requests for your apartment
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          New Request
        </Button>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Active Requests</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center py-8 text-muted-foreground">
              No active service requests. Click "New Request" to submit one.
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Completed Requests</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center py-8 text-muted-foreground">
              No completed requests yet.
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
