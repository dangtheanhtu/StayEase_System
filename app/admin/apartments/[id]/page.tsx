import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Edit } from "lucide-react";
import Link from "next/link";

export default function ApartmentDetailPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <div className="container mx-auto p-6">
      <div className="mb-6">
        <Link href="/admin/apartments">
          <Button variant="ghost" className="mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Apartments
          </Button>
        </Link>
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">Apartment Detail</h1>
          <Button>
            <Edit className="mr-2 h-4 w-4" />
            Edit Apartment
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Basic Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground">Apartment ID</p>
              <p className="font-medium">{params.id}</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Unit Number</p>
              <p className="font-medium">Loading...</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Floor</p>
              <p className="font-medium">Loading...</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Type</p>
              <p className="font-medium">Loading...</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-sm text-muted-foreground">Bedrooms</p>
              <p className="font-medium">Loading...</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Bathrooms</p>
              <p className="font-medium">Loading...</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Square Feet</p>
              <p className="font-medium">Loading...</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Monthly Rent</p>
              <p className="font-medium">Loading...</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
