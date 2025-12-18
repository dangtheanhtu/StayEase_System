import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function ResidentDetailPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <div className="container mx-auto p-6">
      <div className="mb-6">
        <Link href="/admin/residents">
          <Button variant="ghost" className="mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Residents
          </Button>
        </Link>
        <h1 className="text-3xl font-bold">Resident Detail</h1>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground">Resident ID</p>
              <p className="font-medium">{params.id}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Full Name</p>
              <p className="font-medium">Loading...</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Email</p>
              <p className="font-medium">Loading...</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Phone</p>
              <p className="font-medium">Loading...</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Apartment Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground">Apartment Number</p>
              <p className="font-medium">Loading...</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Move-in Date</p>
              <p className="font-medium">Loading...</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Lease End Date</p>
              <p className="font-medium">Loading...</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Status</p>
              <p className="font-medium">Loading...</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
