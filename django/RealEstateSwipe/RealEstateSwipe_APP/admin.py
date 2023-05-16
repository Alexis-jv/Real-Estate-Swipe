from django.contrib import admin

# Register your models here.
from RealEstateSwipe_APP.models import Message, Conversation, User, Property, Advantage

admin.site.register(Message)
admin.site.register(Conversation)
admin.site.register(User)
admin.site.register(Property)
admin.site.register(Advantage)