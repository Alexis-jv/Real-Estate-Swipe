from django.contrib import admin

# Register your models here.
from RealEstateSwipe_APP.models import Message, Conversation, User, Property, Advantage, Picture

admin.site.register(Message)
admin.site.register(Conversation)
admin.site.register(User)
admin.site.register(Property)
admin.site.register(Advantage)

class PictureAdmin(admin.ModelAdmin):
    readonly_fields = ['img_preview']

admin.site.register(Picture, PictureAdmin)

