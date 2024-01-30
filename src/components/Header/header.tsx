import { MenuIcon } from 'lucide-react'
import Image from 'next/image'
import { Button } from '../ui/button'
import { Card, CardContent } from '../ui/card'

export default function Header() {
  return (
    <Card>
      <CardContent>
        <Image src="/logo.png" alt="FSW Barber" width={22} height={120} />

        <Button variant="outline" size="icon">
          <MenuIcon />
        </Button>
      </CardContent>
    </Card>
  )
}
