import { MenuIcon } from 'lucide-react'
import Image from 'next/image'
import { Button } from '../ui/button'
import { Card, CardContent } from '../ui/card'

export default function Header() {
  return (
    <Card className="w-auto">
      <CardContent className="flex flex-row p-5 items-center justify-between">
        <Image src="/logo.png" alt="FSW Barber" width={100} height={120} />

        <Button variant="outline" size="icon">
          <MenuIcon size={16} />
        </Button>
      </CardContent>
    </Card>
  )
}
