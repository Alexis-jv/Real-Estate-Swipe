from django.db import models

# Create your models here.

class Advantage(models.Model): # DONE
    label = models.CharField(max_length=500,null=False)
    icon = models.CharField(max_length=500,null=False) # Not sure about this one, ask Alexis what it should be

    def __str__(self):
        return self.name


class Conversation(models.Model):

    def __str__(self):
        return self.name


class User(models.Model): # DONE
    firstName = models.CharField(max_length=30,null=False)
    lastName = models.CharField(max_length=30,null=False)
    email = models.CharField(max_length=30,null=False)
    password = models.CharField(max_length=30,null=False)

    def __str__(self):
        return self.name


class Message(models.Model): # DONE
    content = models.CharField(max_length=500,null=False)
    date = models.DateField(auto_now_add=True,auto_now=False)
    iduser = models.ForeignKey(User,null=False,on_delete=models.CASCADE)

    def __str__(self):
        return self.name



class Property(models.Model): # DONE
    label = models.CharField(max_length=20,null=False)

    class TypeChoice(models.TextChoices):
        HOUSE = 'HO', ('House')
        APPARTMENT = 'AP', ('Appartment')
        VACANTLOT = 'VL', ('Vacant Lot')
        COMMINDUS = 'CI', ('Commercial / Industrial Premises')
    type = models.CharField(max_length=2, choices=TypeChoice.choices, default=TypeChoice.APPARTMENT)
    
    address = models.CharField(max_length=100,null=False)
    city = models.CharField(max_length=50,null=False)
    country = models.CharField(max_length=50,null=False)
    description = models.CharField(max_length=500,null=False)
    surface = models.IntegerField(null=False)
    nbrRoom = models.IntegerField(null=False)
    price = models.FloatField(null=False)
    isRental = models.BooleanField(default=True)
    iduser = models.ForeignKey(User,null=False,on_delete=models.CASCADE)
    advantages = models.ManyToManyField(Advantage)

    def __str__(self):
        return self.name


def upload_location(instance,filename,**kwargs):
    file_path = 'django/RealEstateSwipe'


class Picture(models.Model): # DONE
    photo = models.ImageField(upload_to='images/',null=False,blank=False)
    idProperty = models.ForeignKey(Property,null=False,on_delete=models.CASCADE)

    def __str__(self):
        return self.name

